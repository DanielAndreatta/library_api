# library_api

API REST que permite manejar librerías y los libros asociados a cada una de ellas. Se utilizo Node.Js Express, Sequelize y Passport como la infraestructura para crear
el servicio. También use SQLlite como motor de base de datos.

## ROUTES

### Library

##### `POST /library`      Crea una nueva librería.

##### `GET /library`      Muestra todas las librerías con sus libros.

##### `GET /library/{id}`      Muestra los datos de una librería por id.

##### `PUT /library/{id}`      Actualiza los datos de una librería.

##### `DELETE library/{id}`      Elimina una librería de manera lógica.

### Book

##### `POST /book`      Añade un nuevo libro.

##### `GET /book`      Muestra todos los libros.

##### `GET /book/{id}`      Muestra los datos de una libro por id.

##### `PUT /book/{id}`      Actualiza los datos de un libro.

##### `DELETE /book/{id}`      Elimina un libro de manera lógica.

### User

##### `POST /user`      Añade un nuevo usuario.

##### `GET /user/{id}`      Muestra los datos de una usuario por id.

## Modelos:

### Entidad Library

| Campo     | Tipo   | Descripción                                     |
|-----------|--------|-------------------------------------------------|
| id        | Int    | El identificador único de la librería.           |
| name      | String | El nombre de la librería.                        |
| location  | String | La dirección física de la librería.              |
| telefono  | String | El número de teléfono de la librería.             |

### Entidad Book

| Campo    | Tipo   | Descripción                                                          |
|----------|--------|----------------------------------------------------------------------|
| id       | Int    | El identificador único de este libro en particular.                   |
| isbn     | Int    | El identificador único en todo el mundo que representa el libro, la versión del autor y el año de edición. |
| titulo   | String | El título del libro.                                                 |
| autor    | String | El autor del libro.                                                  |
| year     | String | El año de edición del libro.                                          |
| library  | Int    | El identificador de la librería donde se encuentra este libro.        |

### Entidad User

| Campo       | Tipo   | Descripción                  |
|-------------|--------|------------------------------|
| id          | Int    | El identificador del usuario |
| firstName   | String | El nombre del usuario        |
| lastName    | String | El apellido del usuario      |
| email       | String | El correo electrónico del usuario |
| password    | String | La contraseña del usuario    |


## Proceso de Desarrollo de la api rest  “library_api”
### 1. Primeramente creo una carpeta con el nombre "library_api" donde se ubicará el proyecto, a su vez, dentro de la misma inicializo el proyecto con "npm init" e instale las dependencias que voy a usar.
### 2. Creo la estructura de la api rest, con todas las carpetas que voy a usar, el archivo app.js y realizo la configuración de la base de datos.
### 3. Creo los modelos que voy a usar para realizar el api, en este caso las entidades serán book, library y user(este último lo hice en base a lo visto en clases), al mismo tiempo realizo los índices correspondientes a los modelos. A los modelos “book” y “library”, les añadí “paranoid” de la librería Sequelize, para poder hacer uso del borrado lógico, el cual crea en la base de datos un campo llamado deleteAt que es de tipo Date, y guarda una fecha de borrado en la base de datos cuando se realiza un delete.
### 4. Creo las rutas que voy a usar para los endpoint de “library” y “book”, con sus respectivos controllers, services y providers.
### 5. Creo las rutas que voy a usar para los endpoint de “user”, con sus respectivos controllers, services y providers.
