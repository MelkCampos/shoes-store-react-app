import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { formatPrice } from '../../util/format'

import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete
} from 'react-icons/md'

import * as CartActions from '../../store/cart/actions'

import { Container, ProductTable, Total } from './styles'

function Cart({ cart, removeFromCart, updateAmountRequest, finalPrice }) {

    // botões de adicionar ou diminuir um item específico

    function incrementProduct(product) {
        updateAmountRequest(product.id, product.amount + 1)
    }

    function decrementProduct(product) {
        updateAmountRequest(product.id, product.amount - 1)
    }

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                            <th>PRODUTO</th>
                            <th>QTD</th>
                            <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    { cart.map(product => (
                    <tr>
                        <td>
                            <img src={product.image}
                            alt={product.title}
                            />
                        </td>
                        <td>
                            <strong>{product.title}</strong>
                            <span>{product.priceFormatted}</span>
                        </td>
                         <td>
                            <div>
                                <button type="button" onClick={() => decrementProduct(product)} >
                                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                                </button>

                                <input type="number" readOnly value={product.amount} />

                                <button type="button" onClick={() => incrementProduct(product)} >
                                    <MdAddCircleOutline size={20} color="#7159c1" />
                                </button>
                              </div>    
                             </td>
                            <td>
                                 <strong>{product.subtotalFormatted}</strong>
                            </td>
                            <td>
                                <button type="button" onClick={() => removeFromCart(product.id)}
                                >
                                    <MdDelete size={20} color="#7159c1" />
                                </button>
                         </td>
                    </tr>
                    ))}
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar pedido</button>

                <Total>
                    <span>TOTAL</span>
<                   strong>{finalPrice}</strong>
                </Total>
            </footer>
        </Container>
    )
}

// Dentro do Reducer                  
// Dentro do Estado do Redux

const mapStateToProps = state => ({
        cart: state.cart.map(product => ({
            ...product,

            //Subtotal do(s) produto(s) = valor do produto * a quantidade
            subtotalFormatted: formatPrice(product.price * product.amount),
    })),

    // reduce: Pega um Array e o reduz a um único valor.
    // Neste caso, 'state.cart' irá ser amarzenado dentro de 'finalPrice'
    finalPrice: formatPrice(state.cart.reduce(( finalPrice, product ) => {
        return finalPrice + product.price * product.amount
    }, 0)) // começar com valor em 'zero'.
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(CartActions, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cart)