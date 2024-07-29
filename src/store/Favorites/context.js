import  { createContext, useReducer } from 'react';
import { favoriteReducer, initialFavoriteState } from './reducer';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoriteReducer, initialFavoriteState);

  return (
    <FavoriteContext.Provider value={{ 
        favoriteState: state, 
        favoriteDispatch: dispatch 
       }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}