import React from 'react'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { Container, ProductTable, Total } from './styles'

export default function Cart() {

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
                    <tr>
                        <td>
                            <img src="https://static.netshoes.com.br/produtos/tenis-mad-rats-old-school/26/DBC-0029-026/DBC-0029-026_detalhe2.jpg?ims=326x" alt="" />
                        </td>
                        <td>
                            <strong>Tênis de corrida</strong>
                            <span>R$79,90</span>
                        </td>
                         <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                                </button>

                                <input type="number" readOnly value={2} />

                                <button type="button">
                                    <MdAddCircleOutline size={20} color="#7159c1" />
                                </button>
                              </div>    
                             </td>
                            <td>
                                <strong>R$159,80</strong>
                            </td>
                            <td>
                                <button type="button">
                                    <MdDelete size={20} color="#7159c1" />
                                </button>
                         </td>
                    </tr>
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar pedido</button>

                <Total>
                    <span>TOTAL</span>
                    <strong>R$1932,38</strong>
                </Total>
            </footer>
        </Container>
    )
}