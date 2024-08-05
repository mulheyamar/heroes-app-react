# PASOS DEL PROYECTO:

# INICIO DEL PROYECTO

## 1- Creamos el proyecto :
```yarn react vite```
```yarn install```
- Borramos todos los archivos de la carpeta src excepto ```main.jsx``` y añadimos un archivo .css que se llama styles.

## 2- Añadimos estilos css de Bootstrap:

Añadimos el link al archivo ***index.html***
``` html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
```

## 3- Guardar imágenes de los heroes: 

Dentro de la carpeta ***src*** creamos una carpeta que se llame ***assets*** y dentro de esta dejamos caer la carpeta  de ***heroes*** que contiene las imágenes:


## 4- Crear los dos módulos: heroes y auth

Dentro de la carpeta ***src*** creamos una carpeta que se llame ***heroes*** y otra carpeta que se llame ***auth***

Dento de ***heroes*** tendremos: carpetas para pages, hooks, helpers, components
Dentro de ***auth*** también tendremos: pages, hooks, components...

```bash
src/
├── assets/heroes
├── auth/
│   ├── components/
│   ├── hooks/
│   └── pages/
├── heroes/
│   ├── components/
│   ├── helpers/
│   ├── hooks/
│   └── pages/
├── HeroesApp.jsx
├── main.jsx
└── styles.css
```

# CREANDO UN PRIMER ROUTER

## 5- Instalamos el React Router:

[ReactRouter](https://reactrouter.com/en/main)

```yarn add react-router-dom@6```
Una vez instalado importamos BrowerRouter en el archivo ***main.jsx*** y envolvemos nuestra aplicación con el componente:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { HeroesApp } from './HeroesApp';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
        <HeroesApp/>
    </BrowserRouter>
  
  </React.StrictMode>,
)
```
## 8- Creamos directorio para el Router:
Dentro de la carpeta ***src*** creamos una carpeta con ***router*** que contendrá la información de las rutas de mi aplicación
```bash
src/
├── router
├── assets/heroes
├── auth/
│   ├── components/
│   ├── hooks/
│   └── pages/
├── heroes/
│   ├── components/
│   ├── helpers/
│   ├── hooks/
│   └── pages/
├── HeroesApp.jsx
├── main.jsx
└── styles.css
```

## 9- Creamos páginas para navegación dentro de la carpeta heroes/pages y auth/pages.
Dentro de pages de la carpeta auth cremos la LoginPage.jsx y dentro de heroes las de DcPage.jsx y MarvelPage.jsx, así mismo ambas carpetas tendran un archivo de barril para simplificar las importaciones.

```bash
src/
├── router
├── assets/heroes
├── auth/
│   ├── components/
│   ├── hooks/
│   └── pages/
│       └── LoginPage.jsx
│       └── index.js
├── heroes/
│   ├── components/
│   ├── helpers/
│   ├── hooks/
│   └── pages/
│       ├── DcPage.jsx
│       └── MarvelPage.jsx
│       └── index.js
├── HeroesApp.jsx
├── main.jsx
└── styles.css
```
Los archivos LoginPage.jsx, DcPage.jsx y MarvelPage.jsx en principio los dejamos de forma simple así:

```jsx
export const LoginPage = () => {
  return (
    <h1>LoginPage</h1>
  )
}
```

## 10- Creamos los Routers dentro de router:
Al router principal de la aplicación se le suele dar el nombre de ```AppRouter.jsx```

```jsx
import { Route, Routes } from "react-router-dom"
import { DcPage, MarvelPage } from "../heroes/pages"
import { LoginPage } from "../auth/pages/LoginPage"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="marvel" element={<MarvelPage/>} />
            <Route path="dc" element = {<DcPage/>}/>          
            
            <Route path="login" element={<LoginPage/>} />
        </Routes>

    </>
  )
}

```
Para que funcione el router tenemos que colocar el componente ```<AppRouter/>``` dentro de la aplicación en el componente HeroesApp.jsx

En este momento nos aparecería un mensaje con este error/ advertencia:
![imagen error /](./img/matchedLocationSlash.jpg)
Nos está pidiendo una página para que dirija la busqueda de la ruta con el path="/" que sirva de comodín en caso de que no tengamos ninguna

Añadimos ```<Route path="/" element={<Navigate to="/marvel"/>} />``` en nuestro archivo ***AppRouter.jsx***, agregando la importación a Navigate: 
```jsx
import { Navigate, Route, Routes } from "react-router-dom"
```

# COLOCAR CLASE DE LA RUTA ACTIVA

## 11- Creamos nuevo modulo UI:
Para hacerlo crearemos primero un nuevo módulo que se llamara ui (user interface), ya que el navbar podría pertenecer a heroes, pero también a auth.

Creamos el modulo y añadimos las carpetas ***components*** y ***hooks*** dentro de él. Así mismo creamos el archivo Navbar.jsx

Crearemos también los archivos de barril dentre de ***components*** y dentro de ***ui*** para facilitar las importaciones.

```bash
src/
├── router
│   └── AppRouter.jsx
├── assets/heroes
├── ui/
│   ├── components/
│       ├── Navbar.jsx
│       └── index.js
│   ├── hooks/
│   └── index.js
├── auth/
│   ├── components/
│   ├── hooks/
│   └── pages/
│       ├── LoginPage.jsx
│       └── index.js
├── heroes/
│   ├── components/
│   ├── helpers/
│   ├── hooks/
│   └── pages/
│       ├── DcPage.jsx
│       ├── MarvelPage.jsx
│       └── index.js
├── HeroesApp.jsx
├── main.jsx
└── styles.css
```

## 11- Añadimos el componente Navbar.jsx:
Copiamos el siguiente código dentro de la carpeta ui/components

```jsx
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({ isActive })=>`nav-item nav-link ${isActive ? 'active': ''}`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({ isActive })=>`nav-item nav-link ${isActive ? 'active': ''}`} 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                  <span className="nav-item nav-link text-info">
                    Ramón 
                  </span>
                  <button className="nav-item nav-link btn">Logout</button>
                </ul>
            </div>
        </nav>
    )
}
```
y Añadimos el nuevo componente creado <Navbar/> al archivo AppRouter de nuestra aplicación:

```jsx
import { Navigate, Route, Routes } from "react-router-dom"
import { DcPage, MarvelPage } from "../heroes/pages"
import { LoginPage } from "../auth/pages/LoginPage"
import { Navbar } from "../ui"


export const AppRouter = () => {
  return (
    <>
    <Navbar/>
        <Routes>
            <Route path="marvel" element={<MarvelPage/>} />
            <Route path="dc" element = {<DcPage/>}/>          
            <Route path="/" element={<Navigate to="/marvel"/>} />

            <Route path="login" element={<LoginPage/>} />
        </Routes>

    </>
  )
}

```

# CREAR UN SEGUNDO ROUTER

Para poder mostrar la pantalla de login distinta de como se ve la de heroes debemos separar ambas estructuras html.

Para ello vamos a crearnos una carpeta ***routes*** dentro de heroes y dentro de esta carpeta creamos un componente ```HeroesRoutes.jsx```que albergará el ```<Navbar/>``` que tendremos que quitar de ```AppRouter.jsx```.

```bash
src/
├── router
│   └── AppRouter.jsx
├── assets/heroes
├── ui/
│   ├── components/
│       ├── Navbar.jsx
│       └── index.js
│   ├── hooks/
│   └── index.js
├── auth/
│   ├── components/
│   ├── hooks/
│   └── pages/
│       ├── LoginPage.jsx
│       └── index.js
├── heroes/
│   ├── components/
│   ├── helpers/
│   ├── hooks/
│   ├── pages/
│       ├── DcPage.jsx
│       ├── MarvelPage.jsx
│       └── index.js
│   └── routes/
├── HeroesApp.jsx
├── main.jsx
└── styles.css
```

El archivo ***HeroesRoutes.jsx*** lo usaremos para apuntar a las rutas de las páginas de heroes, así que tendremos que quitarlas del AppRouter.jsx y ponerlas ahí.

##### HeroesRoutes.jsx: 
```jsx
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, MarvelPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="marvel" element={<MarvelPage/>} />
            <Route path="dc" element = {<DcPage/>}/>          
            
            
            <Route path="/" element={<Navigate to="/marvel"/>} />
        </Routes>
    </>
  )
}

```
y por otro lado ahora el archivo ***AppRouter.jsx*** que quitando lo que ya utilizamos en el nuevo router nos quedaría así:
![alt text](./img/path%20slash.jpg)

pero nos darí este error, por lo que debemos poner el path="/*":

```jsx
        <Route path="/*" element={<HeroesRoutes/>}/>
```

Para terminar vamos al archivo ***AppRouter.jsx*** y envolvemos las routes en nuevo div con la className = "container" para poder darle unos padding y un diseño especial, además añadiremos un par de páginas más ***SearchPage.jsx*** que aparecerá en el navBar y otra ***HeroPage.jsx*** que no estará en el navbar.

```jsx
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPage/>} />
                <Route path="dc" element = {<DcPage/>}/>   

                <Route path="hero" element = {<HeroPage/>}/>   
                <Route path="search" element = {<SearchPage/>}/>          
                               
                <Route path="/" element={<Navigate to="/marvel"/>} />
            </Routes>
        </div>
       
    </>
  )
}
```
y en el ***Navbar.jsx*** añadimos:
```jsx
<NavLink 
                        className={({ isActive })=>`nav-item nav-link ${isActive ? 'active': ''}`} 
                        to="/hero"
                    >
                        Hero
                    </NavLink>
```

```bash
src/
├── router
│   └── AppRouter.jsx
├── assets/heroes
├── ui/
│   ├── components/
│       ├── Navbar.jsx
│       └── index.js
│   ├── hooks/
│   └── index.js
├── auth/
│   ├── components/
│   ├── hooks/
│   └── pages/
│       ├── LoginPage.jsx
│       └── index.js
├── heroes/
│   ├── components/
│   ├── helpers/
│   ├── hooks/
│   ├── pages/
│       ├── DcPage.jsx
│       ├── MarvelPage.jsx
│       ├── HeroPage.jsx
│       ├── SearchPage.jsx
│       └── index.js
│   └── routes/
├── HeroesApp.jsx
├── main.jsx
└── styles.css
```

# Navigate push / replace / useNavigate

Ahora vamos a hacer que al pulsar el botón de ```LOGOUT``` nos lleve a la pantalla del ```LOGIN```.

1. SALIR CON EL LOGOUT
   Abrimos Navbar.jsx
Añadimos una función al onClick
```jsx
 <button onClick={onLogout} className="nav-item nav-link btn">Logout</button>
```
y creamos la función flecha que se activará al hacer onClick:

Para que podamos salir de la página al hacer onClik y disparar la función tenemos que importar el ***hook*** <span><b>useNavigate();</b></span>

Para llegar al push y al replace usamos el custom hook de ***useNavigate***

[Documentación useNavigate](https://reactrouter.com/en/main/hooks/use-navigate)

![push and replace](./img/push_replace.jpg)


```jsx
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

        const navigate = useNavigate();
        
        const onLogout = () =>{
            navigate()
        }
  
    return (
        ...resto del navigate.jsx
```

Si nos ponemos con el cursor sobre la función navigate() nos muestra dos opciones:
![navigate](./img/navigate.jpg)


El Delta (poco usado), y el to:to, options?

Este ***to*** sería ponerle la ruta a donde queremos navegar:
```jsx
navigate('/login')
```

La función ya nos llevaría al Login, pero si pulsamos volver atrás nos devuelve a la página anterior y eso no es lo correcto ya que si nos hemos deslogueado al pulsar atrás debería pedirnos las credenciales de nuevo.


```jsx
navigate('/login',{replace:true})
```
**nota:** para comprobar que funciona copiamos la url y la pegamos en una nueva pestaña del navegador.

El replace eveita que el usuario pueda regresar a la ventana anterior.


2. ENTRAR CON EL LOGIN
   Abrimos el auth/LoginPage.jsx

Aplicamos el mismo sistema anterior para hacer el Login y que nos dirija a la página de Marvel.
```jsx
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
  
  const navigate = useNavigate();
  const onLogin = () => {
    navigate('/marvel', {replace: true})
  }
  
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr/>

      <button 
        className="btn btn-primary"
        onClick={ onLogin }
        >
        Login
      </button>
    </div>
  )
}
```

# Lista de Heroes

- Creamos archivo con los datos de heroes en heroes/data/
  
En este caso usamos una lista de json de los heroes, no una consulta http así que copiamos los datos de heroes en un archivo dentro de la carpeta heroes/data/heroesData.js

El archivo tiene esta estructura:
```js
export const heroes = [{
        'id': 'dc-batman',
        'superhero': 'Batman',
        'publisher': 'DC Comics',
        'alter_ego': 'Bruce Wayne',
        'first_appearance': 'Detective Comics #27',
        'characters': 'Bruce Wayne'
    },
    ...
```

- Creamos un par de funciones dentro de la carpeta heroes/helpers:

#### Función getHeroesByPublisher.js

Es una función que me permitirá obtener los heroes por Publisher.
Tenemos los publisher: "DC Comics" o los publisher:"Marvel Comics"

importamos la lista de heroes:

```js 
import { heroes } from "../heroesData";
```

En la función que creamos recibiremos el publisher como argumento:
```js
export const getHeroesByPublisher = (publisher) => {
}
```

Lo primero que hará la función es comprobar si el publisher es válido ya que solo podemos recibir de dos tipos. Creo un array con los publisher válidos.
```js
const validPublisher = ['Dc Comics', 'Marvel Comics'];

```
Luego compruebo con un if si el publisher que recibo por el argumento está dentro de los validPublisher y si no es así lanzo un error.

```js
if (!validPublisher.includes(publiser)) {
        trhow new Error(`${ publiser } is not a valid publisher`)
    }

```

En caso que sea un publisher válido devuelvo el filtro de heroes que coincidan con el argumento:
    
```js
return heroes.filter(hero => hero.publisher === publisher);

```

Así mi función devolverá un array con los publisher que coincidan con el publisher del argumento.

#### ¿Dónde ejetamos esta función?

Ahora tenemos que abrir la página de DC o la de Marvel.

Contruiríamos algo como esto:
```js
export const DcPage = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr/>

      <ul>
        <li>Batman</li>
        <li>Superman</li>
        <li>...</li>
      </ul>
    </>
  )
}
```
![DcPage.jsx](./img/li%20dc.jpg)

Ya nos está indicando que vamos a necesitar un nuevo componente para renderizar el listado:
![HeroeList.jsx](./img/HeroList.jpg)

#### HeroList.jsx

Creamos un nuevo componente dentro heroes/components/HeroList.jsx

Este componente es el que mandará ejecutar la función getHeroesByPublisher

![getHeroesByPublisher](./img/getHeroesByPublisher.jpg)

En ***DcPage.jsx*** sustituimos el ```<ul>```por el nuevo componente que generará la lista: ***```<HeroList.jsx>```*** y este componente tendrá la prop publisher que será igual a 'DC Comics' o 'Marvel Comics' según la página en que nos encontremos.

```jsx
import { HeroList } from "../components/HeroList";

export const DcPage = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr/>

    <HeroList publisher = 'DC Comics'/>
      
    </>
  )
}
```

A HeroList le llegará la prop publisher con el value = DC Comics y podrá ejecutar la función getHeroesByPublisher para generar el listado de heroes.

```jsx
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const HeroList = ( {publisher}) => {
    
    const heroes = getHeroesByPublisher(publisher)
    
  return (
    
    <ul>
        {
        heroes.map((hero)=>{
           return( <li 
                key= {hero.id }
            >{hero.superhero}</li>
        )
        })
        }
    </ul>
    
  )
}
```

Ahora hay que hacer lo mismo en el componente de MarvelComics.jsx***

# Tarjetas con la información del Héroe

El objetivo de esta sección es crear unas tarjetas que tengan la información de los heroes y crear un acceso para ver la página del heroe.

#### Modificamos el archivo HeroList.jsx:

Cambiamos el ```ul```por un div para poder ponerle clases:

```jsx
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const HeroList = ( {publisher}) => {
    
    const heroes = getHeroesByPublisher(publisher)
    
  return (
    
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
        heroes.map((hero)=>{
           return( <li 
                key= {hero.id }
            >{hero.superhero}</li>
        )
        })
        }
    </div>
    
  )
}

```

>**nota ClassName de  Bootstrap** 
>la clase que utizamos es : ```row rows-cols-1 row-cols-md-3 g-3```
>1. ***.row:*** Esta clase se utiliza para crear una fila en el sistema de cuadrícula de Bootstrap. Dentro de una fila, puedes colocar columnas que se ajustarán automáticamente al ancho disponible. Es esencial para estructurar el layout en Bootstrap.
>
>2. ***.row-cols-1:*** Esta clase define que la fila tendrá una columna en todos los tamaños de pantalla. Es decir, los elementos dentro de esta fila se organizarán en una sola columna en pantallas pequeñas y grandes.
>
>3. ***.row-cols-md-3:*** Esta clase indica que la fila tendrá tres columnas en pantallas de tamaño mediano (768px y superior) y más grandes. En pantallas más pequeñas, las columnas se ajustarán automáticamente según el espacio disponible.
>
>3. ***.g-3:*** Esta clase aplica un espacio de "gutters" (márgenes) de 3 unidades entre las columnas. El valor 3 es relativo a las unidades de espaciado de Bootstrap.

#### Crar un nuevo componente que reciba todas las propiedades del heroe: HeroCard.jsx

A ese componente le llegarán todas estas props:
```jsx
export const HeroCard = ({ id, superhero, publisher,alter_ego, first_appearance, characters }) => {
        
       
  return (
    <div>HeroCard</div>
  )
}
```
#### Actualizamos nuestro HeroList.jsx y sustituimos el ```<li>```por el nuevo componente HeroCard.jsx:

![herocard](./img/herocard.jpg)

Al componente HeroCard.jsx necesito mandarle todas estas propiedades y la key:

![herocardprops](./img/herocardprops.jpg)

Lo podemos hacer directamente con un spread (...):

```jsx
 {
        heroes.map((hero)=>{
           return( 
           <HeroCard 
              key={ hero.id }
              { ...hero }

           />
        )
        })
        }
```
#### diseño de la hero-card:

Queremos una targeta con la imagen a un lado y el texto a otro:
comenzamos con estas clases del Bootstrap:
```jsx
 <div className="col">
        <div className="card"> 


        </div>   
   </div>
```
>1. ***.col:*** En el sistema de cuadrícula de Bootstrap, la clase col se utiliza para definir una columna dentro de una fila (row). Bootstrap utiliza un sistema de cuadrícula de 12 columnas, y las clases de columna (col) son responsables de la distribución del espacio dentro de la fila.
>
>2. ***.card:*** La clase card en Bootstrap se utiliza para crear un contenedor de contenido flexible y extensible. Las tarjetas (card) son componentes de interfaz de usuario que pueden contener una variedad de contenidos y elementos, como texto, imágenes, listas de elementos, encabezados, pies de página, etc.

Creamos una constante para guardar la url de la imagen y ponemos un par de clases más para definir las targetas:

```jsx
export const HeroCard = ({ id, superhero, publisher,alter_ego, first_appearance, characters }) => {
     
    const heroImgUrl = `../../src/assets/heroes/${id}.jpg`;
       
  return (
   <div className="col">
        <div className="card"> 
            <div className="row no-gutters"> 
                <div className="col-4">
                    <img className="card-img" 
                         src={ heroImgUrl }
                         alt={ superhero } 
                         />
                </div>

            </div>

        </div>   
   </div>
  )
}
```
Ya tenemos la imagen de los heroes:

![imagen heroes](./img/imgheroes.jpg)

añadimos el titulo, el alter_ego y los characters.

```jsx
 return (
   <div className="col">
        <div className="card"> 
            <div className="row no-gutters"> 
                <div className="col-4">
                    <img className="card-img" 
                         src={ heroImgUrl }
                         alt={ superhero } 
                         />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{ superhero }</h5>
                        <p className="card-text">{ alter_ego }</p>

                        <p >{ characters }</p>
                    </div>
                </div>
            </div>

        </div>   
   </div>
  )
}
```
Aquí nos damos cuenta que hay heroes que repiten el alter_ego y el characters, como pasa con Green Arrow o Wonder Woman:

![tarejeta repetición](./img/tarjeta.jpg)


#### Formas de condicionar la visualización del "characters" en el HeroCard.jsx

##### 1ª Forma:
Poniendo un condicional concatenado:

```jsx
...resto del código
 <h5 className="card-title">{ superhero }</h5>
                        <p className="card-text">{ alter_ego }</p>
                        {
                            ( alter_ego !== characters) 
                            &&
                            (<p >{ characters }</p>)
                        }                     
                    </div>
                </div>

...resto del código
```
Con esto estamos diciendo que si el alter_ego es distinto a charateres muestra el characters.



Añadimos para terminar los datos del heroe la ```first_appearance```

```jsx
<p className="card-text">
<small className="text-muted">{ first_appearance }</small>
</p> 
```

#### Link para mostrar mas info del superheroe

Para ello vamos a importar el ***Link*** de React-router-dom:

```jsx
import { Link } from "react-router-dom";
```
[Mas...](./img/masInfo.jpg)

```jsx
<Link to={'/hero'}>
    Más...
</Link>
```

El problema es que siempre mostramos la misma ruta al pinchar en Más... y estamos en superman nos gustaría que la ruta nos llevara a superman, es decir:

Tenemos esto: ```http://localhost:5173/hero ``` pero nos gustaría que tomara la ruta al superheroe que hemos pinchado ```http://localhost:5173/hero/dc-batman```

Con este cambio ya lo tendríamos:
```jsx
 <Link to={`/hero/${ id }`}>
   Más...
</Link>
```