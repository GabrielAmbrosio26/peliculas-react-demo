import React, { createContext, useState, useContext } from 'react';

/*
  FavoritesContext.jsx
  - Context API encargado de centralizar la gestión de películas favoritas.
  - Provee: `favorites` (lista), `addFavorite`, `removeFavorite`, `isFavorite`.
  - Comentarios y nombres claros para que otros devs entiendan el contrato.
*/
const FavoritesContext = createContext();

/**
 * Hook personalizado para acceder al contexto de favoritos.
 * Lanza un error si se usa fuera del provider para ayudar al debugging.
 */
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites debe usarse dentro de FavoritesProvider');
  }
  return context;
};

/**
 * Provider del contexto de favoritos. Envuelve la app en App.jsx.
 * - Mantiene `favorites` como estado local
 * - `addFavorite` evita duplicados
 * - `removeFavorite` quita por `imdbID`
 * - `isFavorite` chequea presencia en la lista
 */
export const FavoritesProvider = ({ children }) => {
  // Estado centralizado de favoritas (en memoria)
  const [favorites, setFavorites] = useState([]);

  // Agrega una película a la lista si no existe (evita duplicados)
  const addFavorite = (movie) => {
    setFavorites((prev) => {
      const exists = prev.find((fav) => fav.imdbID === movie.imdbID);
      if (exists) return prev; // no duplicar
      return [...prev, movie];
    });
  };

  // Remueve una película usando su imdbID
  const removeFavorite = (imdbID) => {
    setFavorites((prev) => prev.filter((fav) => fav.imdbID !== imdbID));
  };

  // Indica si la película está en la lista de favoritas
  const isFavorite = (imdbID) => {
    return favorites.some((fav) => fav.imdbID === imdbID);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
