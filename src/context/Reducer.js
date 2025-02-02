export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
        case 'REMOVE_FROM_CART':
            return { ...state, cart: state.cart.filter((c) => c.id !== action.payload) }
        case 'CHANGE_CART_ITEM_QTY':
            return {
                ...state, cart: state.cart.map((c) => {
                    if (c.id === action.payload.id)
                        return { ...c, qty: action.payload.qty }
                })
            }

        default:
            return state
    }

}

export const productReducer = (state, action) => {
    switch (action.type) {
        case 'SORT_BY_PRICE':
            return {...state, sort:action.payload}
    
        case 'FILTER_BY_PRICE':
            return {...state, byStock:!state.byStock}
    
        case 'FILTER_BY_RATING':
            return {...state, byFastDelivery:!state.byFastDelivery}
    }

}