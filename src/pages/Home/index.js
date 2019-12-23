import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { bindActionCreators } from 'redux'
import { MdShoppingCart } from 'react-icons/md'
import { formatPrice } from '../../util/format'
import api from '../../services/api'

// recebendo todas as funções presentes dentro de 'actions'
import * as CartActions from '../../store/cart/actions'

import { ProductList } from './styles'

 class Home extends Component {

    state = {
        products: [],
    }

    // requisição a API
    async componentDidMount() {
        const response = await api.get('products')

        // P.S: tentar trabalhar em certas "informações" antes delas serem "rederizadas"

        // formatação de preço
        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }))

        this.setState({ products: data })
    }

    // p.s: dispatch: disparar uma funcção no "Redux"
    // p.s.: todos os "reducer" são ativados no dispatch

    handleAddProduct = id => {
        const { addToCartRequest } = this.props

        addToCartRequest(id)
    }


    render() { 

        const { products } = this.state
        const { amount } = this.props

        return (
            <ProductList>
             { products.map(product => (   
                <li key={product.id}>
                <img src={product.image} alt={product.title} />
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>

                <button type="button" onClick={() =>
                    this.handleAddProduct(product.id)}>
                        
                    <div>
                        <MdShoppingCart size={16} color="#FFF" /> {' '}
                        {amount[product.id] || 0}
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            ))}     
            </ProductList>
        )
    }    
}

const mapStateToProps = state => ({
    amount: state.cart.reduce(( amount, product ) => {
        amount[product.id] = product.amount

        return amount
    }, {}),
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(CartActions, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps )
    (Home)