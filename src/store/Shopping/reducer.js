import { ADD_TO_BAG } from './actions';

export const initialBagState = {
  bag: [],
};

export const bagReducer = (state, action) => {
    switch (action.type) {
      case ADD_TO_BAG: {
        return {
            ...state,
            bag: [...state.bag, action.payload],
        };
      }
      
      default:
        return state;
    }
};