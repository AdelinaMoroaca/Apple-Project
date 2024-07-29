import  { createContext, useReducer } from 'react';
import { saveForLaterReducer, initialSaveforLaterState } from './reducer';

export const SavedForLaterContext = createContext();

export const SavedForLaterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(saveForLaterReducer, initialSaveforLaterState);

  return (
    <SavedForLaterContext.Provider value={{ 
        saveForLaterState: state, 
        saveForLaterDispatch: dispatch 
       }}
    >
      {children}
    </SavedForLaterContext.Provider>
  );
}