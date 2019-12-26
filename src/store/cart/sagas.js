// Detalhes mais avançados/dinâmicos do produto

// EXEMPLOS: 
// - adicionar ao carrinho - calcular total do carrinho -
// - finalizar pedido - calcular frete -

import { call, select, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '../../services/api'
import { formatPrice } from '../../util/format'

import { addToCartSucess, updateAmountSucess } from './actions'

// Generator: function* = async/await
// A diferença é que o generator é mais 'potente'. Tem masi suportes para certas ações.

// acessa a API, busca as informações com detalhes do produto e o cadastra dentro do carrinho
// p.s.: as 'actions' são os detalhes do produto.



function* addToCart({ id }) {

    const productAlreadyExist = yield select(
        state => state.cart.find(product => 
            product.id === id
        )   
    )
    
    // Verificação do estoque do antes de manda-lo para o carrinho de compras
    const stock = yield call(api.get, `/stock/${id}`)

    const stockAmount = stock.data.amount
    const currentAmount = productAlreadyExist ? productAlreadyExist.amount : 0

    const amount = currentAmount + 1

    if(amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque :( ')
        return
    }


        if(productAlreadyExist) {

            // passando os novos valores
            yield put(updateAmountSucess(id, amount))

        } 
        
        else {
                
            // chamada á API
            // call.: chama métodos 'asycronos' e que retornam' promises'
            const response = yield call(api.get, `/products/${id}`) // URL

            const data = {
                ...response.data,
                amount: 1,
                priceFormatted: formatPrice(response.data.price)
            }
        


        yield put(addToCartSucess(data))

    }
}

function* updateAmount({ id, amount }) {
    if(amount <= 0) return

    const stock = yield call(api.get, `stock/${id}`)
    const stockAmount = stock.data.amount

    if(amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque :( ')
        return
    }

    yield put(updateAmountSucess(id, amount))
}

export default all([
           // ação redux a ser chamado  - função dentro do 'saga' a receber/disparar 
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount)
])

