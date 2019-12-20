// carrinho de compras
export default function cart(state = [], action) {

    console.log(state)

    // p.s.: parâmetro state: é o state do componente_
    // antes de fazermos alguma alteração.

    // por padrão volta ao estado anterior
    switch(action.type) {
        case 'ADD_TO_CART':
          return [ ...state, action.product];
        default:
          return state;  
    }
}
