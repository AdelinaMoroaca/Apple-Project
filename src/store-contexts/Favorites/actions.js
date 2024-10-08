export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';

export const addToFavorite = (product) => {
    return{
        type: ADD_TO_FAVORITE,
        payload: product,
    }
};