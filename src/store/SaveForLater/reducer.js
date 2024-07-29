import { SAVE_FOR_LATER } from './actions';

export const initialSaveforLaterState = {
  saveForLater: [],
};

export const saveForLaterReducer = (state, action) => {
    switch (action.type) {
      case SAVE_FOR_LATER: {
        return {
            ...state,
            saveForLater: [...state.saveForLater, action.payload],
        };
      }
      
      default:
        return state;
    }
};