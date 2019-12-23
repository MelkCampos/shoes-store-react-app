
// ação de adiconar ao carrinho mas sem ser ouvida pelo 'reducer'        
export function addToCartRequest(id) {
    return {
        type: '@cart/ADD_REQUEST',
        id,
    }
}

// é recebida pelo 'reducer' e adiciona o item ao carrinho
export function addToCartSucess(product) {
    return {
        type: '@cart/ADD_SUCESS',
        product,
    }
}

export function removeFromCart(id) {
    return { 
        type: '@cart/REMOVE', 
        id,
    }
}

export function updateAmount(id, amount) {
    return {
        type: '@cart/UPDATE_AMOUNT',
        id,
        amount,
    }
}