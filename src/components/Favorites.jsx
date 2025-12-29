import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import MovieCard from './MovieCard';
import './Favorites.css';

/*
  Favorites.jsx
  - Sidebar que muestra las películas marcadas como favoritas.
  - Obtiene la lista desde el Context API (`useFavorites`).
  - Reutiliza MovieCard para mantener consistencia visual.
  - Comentarios orientados a que el equipo entienda el flujo.
*/
const Favorites = () => {
  // Lista de favoritas desde el Context
  const { favorites } = useFavorites();

  return (
    <aside className="favorites-section">
      <div className="favorites-header">
        <h2>❤️ Favoritas ({favorites.length})</h2>
      </div>
      {favorites.length === 0 ? (
        <p className="no-favorites">
          Aún no tienes películas favoritas. ¡Añade algunas desde los resultados!
        </p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((movie) => (
            // Reutilizamos la tarjeta de película para cada item en la lista
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </aside>
  );
};

export default Favorites;
