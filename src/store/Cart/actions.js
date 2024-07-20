export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// export const addToCartAction = (phone) => {
//     return {
//         type: ADD_TO_CART,
//         payload: phone,
//     }
// }

// export const removeFromCart = (productId) => ({
//     type: REMOVE_FROM_CART,
//     payload: productId,
// });

export const addToCart = (product) => {
    return{
        type: ADD_TO_CART,
        payload: product,
    }
};