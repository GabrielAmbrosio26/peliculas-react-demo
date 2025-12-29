import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import './Home.css';

/*
  Home.jsx
  - Página principal: se encarga de la búsqueda y renderizado de resultados.
  - Flujo:
    1) Recibe `searchTerm` desde Header vía App.jsx
    2) Llama a `searchMovies` cuando cambia el término
    3) Maneja estados: `loading`, `error`, `movies`
  - Comentarios añadidos para que el equipo entienda la lógica y las decisiones.
*/
const Home = ({ searchTerm }) => {
  // Estados para manejar resultados, loading y errores
  const [movies, setMovies] = useState([]); // Lista de películas encontradas
  const [loading, setLoading] = useState(false); // Indicador de carga
  const [error, setError] = useState(''); // Mensaje de error si ocurre algo
  const [displayedTerm, setDisplayedTerm] = useState(''); // Término mostrado en UI

  // Configuración de la API de OMDB
  // Lee la API key de las variables de entorno (.env)
  // Si no existe, usa 'demo' (con límites muy restrictivos)
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY || 'demo';
  const API_URL = 'https://www.omdbapi.com/';

  // Efecto: cuando `searchTerm` cambia, lanzamos la búsqueda automáticamente
  useEffect(() => {
    if (searchTerm.trim()) {
      searchMovies(searchTerm);
    }
  }, [searchTerm]);

  // Función para buscar películas en la API de OMDB
  // - query: texto a buscar
  // - Actualiza loading, error y resultados
  const searchMovies = async (query) => {
    setLoading(true);
    setError('');
    setMovies([]);
    setDisplayedTerm(query);

    try {
      // Llamada a la API: `s` = search, `type=movie` filtra solo películas
      const response = await fetch(
        `${API_URL}?s=${encodeURIComponent(query)}&type=movie&apikey=${API_KEY}`
      );
      const data = await response.json();

      // Si la API responde correctamente, guardamos los resultados
      if (data.Response === 'True') {
        setMovies(data.Search || []);
      } else {
        // Manejo de errores según respuesta de OMDB
        setError(data.Error || 'No se encontraron películas');
        setMovies([]);
      }
    } catch (err) {
      // Error de red o parsing: log para debug y mensaje genérico al usuario
      setError('Error al buscar películas. Intenta de nuevo más tarde.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="home">
      <div className="home-content">
        <section className="results-section">
          {loading && (
            <div className="loading">
              <p>Buscando películas...</p>
            </div>
          )}
          {error && (
            <div className="error">
              <p>⚠️ {error}</p>
            </div>
          )}
          {!loading && !error && movies.length === 0 && displayedTerm && (
            <div className="no-results">
              <p>No se encontraron películas para "{displayedTerm}"</p>
            </div>
          )}
          {!loading && movies.length > 0 && (
            <div className="movies-container">
              <h2 className="results-title">
                Resultados para "{displayedTerm}" ({movies.length})
              </h2>
              <div className="movies-grid">
                {movies.map((movie) => (
                  <MovieCard key={movie.imdbID} movie={movie} />
                ))}
              </div>
            </div>
          )}
          {!loading && !error && movies.length === 0 && !displayedTerm && (
            <div className="welcome">
              <h2>Bienvenido al Buscador de Películas</h2>
              <p>Usa la barra de búsqueda para encontrar tu película favorita</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Home;
