import axios from "axios";

// Aqui es donde nomralmente definiria mis diferentes rutas de la api, normalmente tengo una de poductivo y ptra de pruebas
const myQuery = axios.create({
    // baseUrl es una propiedad que ya existe, te permite generar una ruta base y agregarle valores, para no estarla repitiendo en el codigo
    baseURL: 'https://rickandmortyapi.com/api/character/'
});

export { myQuery };