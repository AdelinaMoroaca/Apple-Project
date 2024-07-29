export const SAVE_FOR_LATER = 'SAVE_FOR_LATER';

export const saveForLater = (product) => {
    return{
        type: SAVE_FOR_LATER,
        payload: product,
    }
};