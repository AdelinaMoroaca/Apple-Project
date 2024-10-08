import { ADD_TO_BAG, REMOVE_FROM_BAG } from './actions';

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

      case REMOVE_FROM_BAG:
        return {
          ...state,
          bag: state.bag.filter((product) => product.id !== action.payload),
        };
      
      default:
        return state;
    }
};