# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

## Rick and morty Api
```
import axios from "axios";

// Aqui es donde nomralmente definiria mis diferentes rutas de la api, normalmente tengo una de poductivo y ptra de pruebas
const myQuery = axios.create({
    // baseUrl es una propiedad que ya existe, te permite generar una ruta base y agregarle valores, para no estarla repitiendo en el codigo
    baseURL: 'https://rickandmortyapi.com/api/character/'
});

export { myQuery };
```
