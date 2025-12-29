import { useState } from 'react';
import './App.css';
import { FavoritesProvider } from './context/FavoritesContext';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './components/Favorites';
import WelcomeBanner from './components/WelcomeBanner';

/*
  App.jsx
  - Componente raíz de la aplicación.
  - Estructura general:
    • FavoritesProvider: envuelve la app para proveer el contexto de favoritas
    • Header: recibe la función setSearchTerm para pasar el término buscado
    • Home: muestra resultados según `searchTerm`
    • Favorites: sidebar con las películas guardadas
  - Comentarios para que otros devs entiendan dónde conectar nuevas piezas.
*/
function App() {
  // Estado compartido (pasado a Header y Home)
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <FavoritesProvider>
      <div className="app">
        {/* Banner de bienvenida visible al iniciar la app */}
        <WelcomeBanner author="Gabri" role="Candidato - Proceso de selección" />

        {/* Header con barra de búsqueda */}
        <Header onSearch={setSearchTerm} />

        {/* Layout principal: resultados + sidebar de favoritas */}
        <div className="app-container">
          {/* Home recibe searchTerm y busca películas automáticamente */}
          <Home key={searchTerm} searchTerm={searchTerm} />
          {/* Sidebar con películas favoritas (accede al Context API) */}
          <Favorites />
        </div>
      </div>
    </FavoritesProvider>
  );
}

export default App;
