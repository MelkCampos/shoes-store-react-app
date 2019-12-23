// Detalhes mais avançados/dinâmicos do produto

// EXEMPLOS: 
// - adicionar ao carrinho - calcular total do carrinho -
// - finalizar pedido - calcular frete -

import { call, put, all, takeLatest } from 'redux-saga/effects'

import api from '../../services/api'

import { addToCartSucess } from './actions'

// Generator: function* = async/await
// A diferença é que o generator é mais 'potente'. Tem masi suportes para certas ações.

// acessa a API, busca as informações com detalhes do produto e o cadastra dentro do carrinho
// p.s.: as 'actions' são os detalhes do produto.



function* addToCart({ id }) {

    // chamada á API
    // call.: chama métodos 'asycronos' e que retornam' promises'
    const response = yield call(api.get, `/products/${id}`) // URL

    yield put(addToCartSucess(response.data))

}


export default all([
           // ação redux a ser chamado  - função dentro do 'saga' a receber/disparar 
    takeLatest('@cart/ADD_REQUEST', addToCart)
])

