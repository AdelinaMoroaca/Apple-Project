import  { createContext, useReducer } from 'react';
import { bagReducer, initialBagState } from './reducer';

export const BagContext = createContext();

export const BagProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bagReducer, initialBagState);

  return (
    <BagContext.Provider value={{ 
        bagState: state, 
        bagDispatch: dispatch 
       }}
    >
      {children}
    </BagContext.Provider>
  );
}