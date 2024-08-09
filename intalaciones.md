## INICIAR PROYECTO REACT CON VIT

#### CMD:
Instalar yarn si no lo tenemos: 
comprobar versión de yarn:
```
yarn --version
```
Instalar: 
```
npm install --global yarn
```
Instalar biblioteca de propTypes:
```
yarn add prop-types
```

Abrimos cmd y escribimos:
1º
```dos
C:\\ cd + (arrastramos la carpeta donde guardamos los proyectos de react)
```
2º 
```
yarn create vite
```
bautizamos el proyecto 
seleccionamos React y javaScript

#### EXPLORADOR WINDOWS:

Abrimos la carpeta de proyectos y cambiamos el nombre de la carpeta que hemos creado (si fuera el caso)

#### VISUAL STUDIO CODE:

- Arrastramos la nueva carpeta a VSCode 
- Borramos todo lo que hay dentro de /src dejando solo el archivo main.jsx
- Creo un nuevo componente con el nombre del proyecto. ```rafc + tab``` para crear componente. (no necesitamos el import de react)

#### CMD:

Dentro de la carpeta del proyecto instalamos yarn
```cmd
C:/<ruta proyecto>/yarn 
```
ejecutamos el servidor:
```cmd
C:/<ruta proyecto>/yarn dev
```

#### GENERAR LA CARPETA DE DISTRIBUCION:
Una vez tenemos una versión funcional de la App podemos generar la carpeta de distribución.
- salimos del servidor 
- dentro de la carpeta de la app: ```yarn build```

#### SUBIR A NETLIFY:

Abrimos la web de Nelify en el apartado Sites y arrastramos nuestra carpeta ```Dist```


## CONTROL DE VERSIONES GIT:

Nos aseguramos que tenemos el archivo .gitignore
- Escribimos : ```git init```
- renombramos la rama principal master por main: ```git branch -m main ```
- Reconstruccion del proyecto al ultimo commit : ```git checkout --."

## PRUEBAS Y TEST:
1.- En VScode pegamos estas dos lineas y las pegamos en la carpeta del proyecto:
```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

2.- Instalamos también
Esto no hace falta si trabajamos con versión superior a React 18 pero funciona bien y no da problemas, pero solo si usamos ***Fetch API*** en el proyecto.

```
yarn add --dev whatwg-fetch
```

3.- Actualizamos los scripts del ***package.json***, agregamos esa linea de test
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4.- Creamos la configuración de babel creando el archivo ***babel.config.cjs***

```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};

```

5.-  crear Jest config y setup

***jest.config.cjs***
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}

```
***jest.setup.js***
```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch

```
6.- Abrimos una terminal cmd y en la carpeta del proyecto levantamos el servidor con ```yarn dev``` para comprobar que nuestra aplicación funciona correctamente. 

7.- Cerramos la terminal y ahora hacemos ```yarn test```

8.- Creamos la carpeta test y un arhivo de prueba.test.js con describe y test para probar jest.


## Recomendaciones pruebas:

1.- Trazar el camino crítico de la App.
2.- Comenzar el testing por los componentes que menos dependencias tienen.


## NAVEGAR ENTRE PAGINAS:
!()[https://reactrouter.com/en/main]
cerramos el servidor (si está abierto) y en la terminal le pegamos : yarn add react-router@6 react-router-dom@6

Hacemos la instalación en el proyecto con:
```yarn add react-router-dom@6```

Hacemos las importaciones en el archivo Main.jsx:
```jsx
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
```

## HOJAS DE ESTILOS .CSS:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

```