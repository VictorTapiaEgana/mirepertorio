
# Desafío - Mi Repertorio.

 Aplicación web con uso de Node y postgres, permite agregar, edita y eliminar registro (Canciones) desde el frontend, uso de promesas para las consultas. 

![](https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)
![](https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white)
![](https://img.shields.io/badge/Bootstrap-7952B3.svg?style=for-the-badge&logo=Bootstrap&logoColor=white)

### Estructura de Carpetas
```
└── 📁Desafio - Mi repertorio
    └── .env
    └── db_config.js
    └── 📁functions
        └── actualizar.js
        └── eliminar.js
        └── insertar.js
        └── listado.js
    └── package-lock.json
    └── package.json
    └── 📁pages
        └── index.html
    └── 📁public
        └── 📁css
            └── style.css
        └── 📁images
            └── agregar.png
            └── auriculares.png
            └── editar.png
            └── eliminar.png
        └── 📁scripts
            └── script.js
    └── README.md
    └── server.js
```

## Dependencias
```
  "dependencies": {
    "bootstrap": "^5.3.3",
    "express": "^4.19.2",
    "pg": "^8.12.0"
  }

```

## instalacion
```
 git clone https://github.com/VictorTapiaEgana/mirepertorio.git
 npm install
 npm start
```

## Script DASE DE DATOS:
```
CREATE DATABASE "repertorio "
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
```

## Script de la TABLA:
```
CREATE TABLE IF NOT EXISTS public.canciones
(
    id integer NOT NULL DEFAULT nextval('canciones_id_seq'::regclass),
    titulo character varying(50) COLLATE pg_catalog."default",
    artista character varying(50) COLLATE pg_catalog."default",
    tono character varying(10) COLLATE pg_catalog."default"
)
```

## Definir un arcvhivo .ENV con las siguientes constantes:
```
SERVER_PORT=3010
DB_HOST='localhost'
DB_NAME='repertorio '
DB_USER='postgres'
DB_PASS= tu constraseña
DB_PORT=5432
```

## Screenshots

![](https://raw.githubusercontent.com/VictorTapiaEgana/mirepertorio/master/github/index.png)

![](https://raw.githubusercontent.com/VictorTapiaEgana/mirepertorio/master/github/delete.png)

![](https://raw.githubusercontent.com/VictorTapiaEgana/mirepertorio/master/github/editar.png)