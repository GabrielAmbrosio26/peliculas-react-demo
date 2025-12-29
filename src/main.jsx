import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/*
  main.jsx
  - Punto de entrada de la aplicación.
  - Envuelve App en StrictMode para ayudar a detectar problemas durante el desarrollo.
  - Importante: no cambiar la manera de renderizar sin entender el ciclo de vida de React 18.
*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
