# Proyecto CRUD con React, Express y MongoDB

Este proyecto es una aplicación CRUD (Create, Read, Update, Delete) que utiliza React para la interfaz de usuario, Express para el servidor y MongoDB como base de datos. A continuación, se detalla cómo configurar, ejecutar y usar el proyecto.

## Requisitos

- [Node.js](https://nodejs.org/) (versión LTS recomendada)
- [MongoDB](https://www.mongodb.com/) (asegúrate de tener una instancia en ejecución)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)


## Estructura del proyecto

El proyecto está dividido en dos carpetas principales:

- `server`: Contiene el código del servidor Express.
- `client`: Contiene el código de la aplicación React.


### Servidor

1. Configura la URI de MongoDB en un archivo `.env` en la carpeta `server`:
    
    MONGO_URI=mongodb://localhost:27017/nombredelabase
    PORT=3000
    

2. Inicia el servidor:
    
    cd server
    npm start
    

El servidor se ejecutará en `http://localhost:3000`.

### Cliente

1. Inicia la aplicación React:
    
    cd ../client
    npm start
    

La aplicación se ejecutará en `http://localhost:3000`.

## Características

- Crear, leer y eliminar elementos en la base de datos MongoDB.
- Interfaz de usuario interactiva y receptiva utilizando React.
- Comunicación eficiente entre el cliente y el servidor utilizando Express.


## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
