import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import './MovieCard.css';

/*
  MovieCard.jsx
  - Tarjeta que muestra una película individual.
  - Usa el hook `useFavorites` para leer/actualizar el estado global de favoritas.
  - Responsable de mostrar poster, título, año y el botón de favorito.
*/
const MovieCard = ({ movie }) => {
  // Acceso al Context API de Favoritos
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(movie.imdbID);

  // Alterna el estado de favorito: agrega o remueve según corresponda
  const handleFavoriteClick = () => {
    if (favorite) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite(movie);
    }
  };

  // Si la API no tiene póster, mostramos un placeholder
  const posterUrl =
    movie.Poster && movie.Poster !== 'N/A'
      ? movie.Poster
      : 'https://via.placeholder.com/300x450?text=Sin+Carátula';

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterUrl} alt={movie.Title} />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-year">Año: {movie.Year}</p>
        <p className="movie-type">Tipo: {movie.Type}</p>
        <button
          className={`favorite-btn ${favorite ? 'active' : ''}`}
          onClick={handleFavoriteClick}
        >
          {favorite ? '❤️ Favorita' : '🤍 Añadir a favoritas'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
