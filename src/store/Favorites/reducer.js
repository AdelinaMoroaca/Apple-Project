import { ADD_TO_FAVORITE } from './actions';

export const initialFavoriteState = {
  favorite: [],
};

export const favoriteReducer = (state, action) => {
    switch (action.type) {
      case ADD_TO_FAVORITE: {
        return {
            ...state,
            favorite: [...state.favorite, action.payload],
        };
      }
      
      default:
        return state;
    }
};