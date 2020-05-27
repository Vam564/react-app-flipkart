
const reducer = (state, action) => {
    const {type,  context} =action
    const {shoppingCart} = state;
    switch (type) {
        case 'API_SUCCESS':{
            return {
                ...state,
                ...context
            }
        }
        case 'UPDATE_TOTALS':{
            return {
                ...state,
                totalPrice:shoppingCart.reduce((a, b) => a + Number(b.cutOffPrice) * b.quantity, 0),
                totalCost:shoppingCart.reduce((a, b) => a + Number(b.cutOffPrice) * b.quantity + b.quantity * b.deliveryFee, 0),
                deliveryFee:shoppingCart.reduce((a, x) => a + (x.quantity * x.deliveryFee), 0)
            }
        }
        case 'INCREMENT_COUNTERS':{
            const {index} = context
            shoppingCart[index].quantity++
            return {
                ...state,
                shoppingCart:[...shoppingCart]
            }
        }
        case 'DECREMENT_QUANTITY':{
            const {index} = context
           shoppingCart[index].quantity--
            return {
                ...state,
                shoppingCart:[...shoppingCart]
            }
        }
        case 'DELETE_ITEMS':{
            const {index} = context
            const shoppingCartItems=shoppingCart.filter((item,i) => i!= index )
            return {
                ...state,
                shoppingCart:[...shoppingCartItems]
            }
        }
        default: {
            return state    
    }
        }
}
 
export default reducer