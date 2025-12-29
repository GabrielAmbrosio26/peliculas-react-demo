import React, { useState } from 'react';
import './WelcomeBanner.css';

/*
  WelcomeBanner.jsx
  - Banner visible al entrar en la app para el equipo de selección.
  - Incluye mensaje claro y botón para cerrar.
*/
const WelcomeBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="welcome-banner">
      <div className="welcome-inner">
        <div className="welcome-text">
          <strong>Gabriel Angel Ambrosio Losada</strong>
          <p>¡Hola equipo de selección! Gracias por revisar mi proyecto.</p>
          <p>Esta app fue desarrollada por mí usando React y Context API. Puedes buscar películas, ver resultados y guardar tus favoritas. </p>
          <p>Habilidades demostradas: React, Context API, JavaScript ES6+, CSS responsive, Git/GitHub</p>
        </div>
        <button
          className="welcome-close"
          onClick={() => setVisible(false)}
          aria-label="Cerrar banner"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default WelcomeBanner;

