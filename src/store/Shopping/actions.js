export const ADD_TO_BAG = 'ADD_TO_BAG';

export const addToBag = (product) => {
    return{
        type: ADD_TO_BAG,
        payload: product,
    }
};