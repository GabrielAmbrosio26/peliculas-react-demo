<!--
   README destacado
   - Este encabezado se muestra en la página principal del repositorio (GitHub).
   - Mensaje breve y claro para que el equipo de selección vea al entrar.
-->

# 🎬 Buscador de Películas React

**Proyecto preparado por Gabri — Entregado para proceso de selección**

Una aplicación web moderna para buscar películas, ver detalles y guardar tus favoritas. Construida con React, Vite y Context API.

## ✨ Características

- 🔍 **Búsqueda de películas** - Busca por título usando la API OMDB
- 💖 **Lista de favoritas** - Guarda tus películas favoritas con Context API
- 📱 **Diseño responsive** - Funciona perfectamente en desktop, tablet y móvil
- 🎨 **Interfaz moderna** - Diseño atractivo con gradientes y animaciones
- ⚡ **Rápido y ligero** - Construido con Vite para máximo rendimiento

## 🚀 Tecnologías

- **React 18** - Librería de UI
- **Vite** - Build tool y dev server
- **Context API** - Manejo de estado global
- **CSS3** - Estilos responsive y animaciones
- **OMDB API** - Base de datos de películas

## 📋 Requisitos previos

- Node.js 18+ 
- npm o yarn
- Una API key de OMDB (gratuita)

## 🔑 Obtener API Key de OMDB

1. Visita [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)
2. Elige el plan gratuito
3. Completa el formulario con tu email
4. Revisa tu correo y confirma la suscripción
5. Copia tu API key

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <URL-DEL-REPOSITORIO>
cd buscador-peliculas

# Instalar dependencias
npm install
```

## ⚙️ Configuración

1. Abre [src/pages/Home.jsx](src/pages/Home.jsx)
2. Busca la línea: `const API_KEY = 'demo';`
3. Reemplaza `'demo'` con tu API key real:
   ```javascript
   const API_KEY = 'tu-api-key-aqui';
   ```

## 🏃 Ejecutar el proyecto

```bash
# Iniciar servidor de desarrollo
npm run dev

# La app abrirá en http://localhost:5173
```

## 📦 Build para producción

```bash
# Crear versión optimizada
npm run build

# Previsualizar build
npm run preview
```

## 📁 Estructura de carpetas

```
src/
├── components/
│   ├── Header.jsx           # Barra de búsqueda y título
│   ├── Header.css
│   ├── MovieCard.jsx        # Tarjeta individual de película
│   ├── MovieCard.css
│   ├── Favorites.jsx        # Sección de películas favoritas
│   └── Favorites.css
├── context/
│   └── FavoritesContext.jsx # Context API para manejo de favoritos
├── pages/
│   ├── Home.jsx             # Página principal con búsqueda y resultados
│   └── Home.css
├── App.jsx                  # Componente raíz
├── App.css
├── main.jsx                 # Punto de entrada
└── index.css                # Estilos globales
```

## 🎯 Cómo usar la app

1. **Buscar películas**: Escribe el título en la barra de búsqueda y presiona "Buscar"
2. **Ver detalles**: Las tarjetas muestran título, año y tipo de contenido
3. **Añadir a favoritas**: Haz clic en el botón "🤍 Añadir a favoritas"
4. **Ver favoritas**: Consulta la sección de favoritas en el sidebar derecho
5. **Quitar de favoritas**: Haz clic en "❤️ Favorita" para remover

## 🎨 Personalizaciones

### Cambiar colores

Abre los archivos CSS y modifica los siguientes colores:

- **Gradiente principal**: `#667eea` y `#764ba2`
- **Color de botones**: `#ff6b6b`
- **Fondo de favoritas**: `#f5f5f5`

### Cambiar límites de películas

En [src/pages/Home.jsx](src/pages/Home.jsx), puedes cambiar `&type=movie` por:
- `&type=series` - Solo series
- Sin filtro - Películas y series

## ⚠️ Notas importantes

- La API key `'demo'` tiene límites muy restrictivos. Debes usar una API key personal.
- Las películas sin póster mostrarán una imagen placeholder.
- Los resultados están limitados a las primeras 10 películas por búsqueda (limitación de OMDB).
- El Context API mantiene los favoritos en memoria (se pierden al recargar).

## 🚀 Funciones futuras opcionales

- [ ] Guardar favoritos en localStorage
- [ ] Mostrar más detalles de la película (sinopsis, actores, críticas)
- [ ] Filtros por año, género, etc.
- [ ] Paginación de resultados
- [ ] Generación de descripciones con IA
- [ ] Ratings y reseñas
- [ ] Compartir películas en redes sociales

## 📝 Licencia

Este proyecto está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Creado como mini proyecto de demostración de React y Context API.

---

**¿Necesitas ayuda?** Verifica que:
- ✅ Tienes instalados Node.js y npm
- ✅ Tu API key de OMDB está correctamente configurada
- ✅ Ejecutas `npm install` antes de `npm run dev`
