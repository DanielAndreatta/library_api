# library_api

API REST que permite manejar librerías y los libros asociados a cada una de ellas. Se utilizo Node.Js Express, Sequelize y Passport como la infraestructura para crear
el servicio. También use SQLlite como motor de base de datos.

## Modelos:

### Entidad Librería

| Campo     | Tipo   | Descripción                                     |
|-----------|--------|-------------------------------------------------|
| id        | Int    | El identificador único de la librería.           |
| name      | String | El nombre de la librería.                        |
| location  | String | La dirección física de la librería.              |
| telefono  | String | El número de teléfono de la librería.             |

### Entidad Libro

| Campo    | Tipo   | Descripción                                                          |
|----------|--------|----------------------------------------------------------------------|
| id       | Int    | El identificador único de este libro en particular.                   |
| isbn     | Int    | El identificador único en todo el mundo que representa el libro, la versión del autor y el año de edición. |
| titulo   | String | El título del libro.                                                 |
| autor    | String | El autor del libro.                                                  |
| year     | String | El año de edición del libro.                                          |
| library  | Int    | El identificador de la librería donde se encuentra este libro.        |

