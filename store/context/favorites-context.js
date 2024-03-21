import { createContext } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => { },
  removeFavorite: (id) => { },
});

function FavoritesContextProvider({ children }) {
  return (
    <FavoritesContext.Provider value={{}}>{children}</FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
