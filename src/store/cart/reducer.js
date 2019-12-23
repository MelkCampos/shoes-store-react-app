import produce from 'immer'

// carrinho de compras
export default function cart(state = [], action) {

    console.log(state)

    // p.s.: parâmetro state: é o state do componente_
    // antes de fazermos alguma alteração.

    // por padrão volta ao estado anterior
    switch(action.type) {
        case '@cart/ADD_SUCESS':

      // o 'draft' é um copia de 'state', por tanto o ArrayList
      return produce(state, draft => {

        // pegando ID do produto
        const productIndex = draft.findIndex(product =>
            product.id === action.product.id
          )

          // verifica se o ID já está no carrinho do cliente.
          // Se caso estiver ele não irá duplicar o produto no carrinho de compras
          // Ele irá aumentar a quantidade do produto para "2" por exemplo.
          if(productIndex >= 0) {
            draft[productIndex].amount++
          }

          // Se o ID não exister no carrinho de compras ( ou seja, ele ainda não foi adicionado )
          // Então, se criara um novo produto dentro do carrinho de compras
          else {
            draft.push({
              ...action.product,
              amount: 1,
            })
          }

      })


      // remover item do carrinho de compras 
      case '@cart/REMOVE':
      return produce(state, draft => {

        const productIndex = draft.findIndex(product => 
          product.id === action.id
        )
  
        if(productIndex >= 0) {
          draft.splice(productIndex, 1)
        }
      })

      case '@cart/UPDATE_AMOUNT': { 
      
      // não fazer alterações no estado { state }
      if(action.amount <= 0) {
        return state
      }

      return produce(state, draft => {

        const productIndex = draft.findIndex(product => 
          product.id === action.id
        )

        if(productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount)
        }

      })

    }
        default:
          return state;  
    }
}
