import React, { useState } from 'react';
import './Header.css';

/*
  Header.jsx
  - Componente responsable de la barra de búsqueda en la parte superior.
  - Recibe `onSearch` (función) desde App.jsx y emite el término que debe buscarse.
  - Mantiene su propio estado local `searchTerm` mientras el usuario escribe.
  Comentarios pensados para el equipo: explicar responsabilidades y flujo de datos.
*/
const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Maneja el envío del formulario de búsqueda
  // - Previene el comportamiento por defecto
  // - Valida que el término no sea sólo espacios
  // - Llama a `onSearch` (prop recibida) y limpia el input
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      setSearchTerm(''); // limpiamos para mejorar UX (opcional)
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">🎬 Buscador de Películas</h1>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="Busca tu película favorita..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-btn">
            Buscar
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
