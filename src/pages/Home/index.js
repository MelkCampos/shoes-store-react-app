import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { MdShoppingCart } from 'react-icons/md'
import { formatPrice } from '../../util/format'
import api from '../../assets/api'

import { ProductList } from './styles'

 class Home extends Component {

    state = {
        products: []
    }

    // requisição a API
    async componentDidMount() {
        const response = await api.get('products')

        // P.S: tentar trabalhar em certas "informações" antes dela ser "rederizada"

        // formatação de preço
        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }))

        this.setState({ products: data })
    }

    // p.s: dispatch: disparar uma funcção no "Redux"
    // p.s.: todos os "reducer" são ativados no dispatch

    handleAddProduct = product => {
        const { dispatch } = this.props

        dispatch({
            type: 'ADD_TO_CART',
            product,
        })
    }


    render() { 

        const { products } = this.state

        return (
            <ProductList>
             { products.map(product => (   
                <li key={product.id}>
                <img src={product.image} alt={product.title} />
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>

                <button type="button" onClick={() => this.handleAddProduct(product)}>
                    <div>
                        <MdShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            ))}     
            </ProductList>
        )
    }    
}

export default connect()(Home)