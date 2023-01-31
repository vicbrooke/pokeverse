import { createContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  function addFavourite(name) {
    setFavourites([...favourites, name]);
  }

  function removeFavourite(name) {
    setFavourites(
      favourites.filter((favourite) => {
        return name !== favourite;
      })
    );
  }

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
