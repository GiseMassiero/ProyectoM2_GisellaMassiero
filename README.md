
📚 Blog API - Node.js + Express + PostgreSQL

📌 Descripción del proyecto

Este proyecto es una API REST para un sistema de blog que permite gestionar autores y posts.

La API permite realizar operaciones CRUD completas sobre ambas entidades (creación, lectura, actualización y eliminación), y está desarrollada con:

Node.js

Express

PostgreSQL


Se implementa una arquitectura modular por capas, separando responsabilidades en:

routes

controllers

services

database

Además, incluye documentación interactiva con Swagger (OpenAPI) para facilitar la prueba y exploración de los endpoints.

⚙️ Requisitos

Antes de ejecutar el proyecto, asegurarse de tener instalado:

Node.js (v16 o superior)

PostgreSQL

npm

Git (opcional)


🚀 Instalación y ejecución local

1️⃣ Clonar el repositorio
git clone https://github.com/GiseMassiero/ProyectoM2_GisellaMassiero

cd blog-api

2️⃣ Instalar dependencias

npm install

3️⃣ Configurar variables de entorno


Crear un archivo .env en la raíz del proyecto:

DB_USER=postgres

DB_PASSWORD=tu_password

DB_HOST=localhost

DB_PORT=5432

DB_NAME=BLOG_API


4️⃣ Crear base de datos

Ejecutar el archivo:

database/schema.sql

Esto crea las tablas:

authors

posts



5️⃣ Ejecutar el servidor

npm run dev

El servidor quedará disponible en:

http://localhost:3000


📡 Documentación de la API (Swagger / OpenAPI)

La documentación interactiva está disponible en:

http://localhost:3000/api-docs

<img width="1529" height="538" alt="Captura de pantalla_12-6-2026_213057_localhost" src="https://github.com/user-attachments/assets/9477c632-b96a-4815-9bbf-fa1ac4b79ac0" />


Desde allí se pueden probar todos los endpoints directamente.

<img width="1563" height="943" alt="Captura de pantalla_12-6-2026_215944_localhost" src="https://github.com/user-attachments/assets/f844c967-4518-4b65-bfd8-4b461c144ab4" />

👤 Endpoints - Authors

GET /authors → Obtener todos los autores

GET /authors/:id → Obtener autor por ID

POST /authors → Crear autor

PUT /authors/:id → Actualizar autor

DELETE /authors/:id → Eliminar autor


📝 Endpoints - Posts

GET /posts → Obtener todos los posts

GET /posts/:id → Obtener post por ID

GET /posts/author/:authorId → Obtener posts por autor

POST /posts → Crear post

PUT /posts/:id → Actualizar post

DELETE /posts/:id → Eliminar post


<img width="1543" height="728" alt="Captura de pantalla_12-6-2026_221223_localhost" src="https://github.com/user-attachments/assets/a0c11c7d-4e8c-4b7a-8bb3-f879397cc280" />



🧪 Tests

Este proyecto utiliza Jest para pruebas unitarias.

▶️ Ejecutar tests

npm test

🧪 Modo detallado (opcional)

npx jest --runInBand



⚠️ Importante

Si es la primera vez que clonas el proyecto:

npm install

Luego ejecutar:

npm test



🌍 Deployment (Railway)

Este proyecto se deployará en Railway.

⚙️ Configuración importante

En Railway el puerto se asigna automáticamente:

PORT=process.env.PORT



🔐 Variables de entorno en producción

Configurar en Railway:

DB_USER

DB_PASSWORD

DB_HOST

DB_PORT

DB_NAME


🚀 Pasos de deploy

Subir el proyecto a GitHub

Conectar el repositorio en Railway

Configurar variables de entorno

Deploy automático

🌐 URL pública

Pendiente de deployment


🤖 Uso de Inteligencia Artificial


Durante el desarrollo del proyecto utilicé ChatGPT como herramienta de apoyo para:

Organización de la estructura del proyecto

<img width="834" height="756" alt="Captura de pantalla_12-6-2026_221412_chatgpt com" src="https://github.com/user-attachments/assets/95d4ea2f-4d05-49a6-9e75-4178cc6249d8" />


Explicación de conceptos técnicos

Documentación del README

Implementación y configuración de Swagger (OpenAPI)

Resolución de dudas sobre Node.js, Express y PostgreSQL

Mejora de buenas prácticas en arquitectura modular

La IA fue utilizada como asistente educativo, sin reemplazar el desarrollo del código ni el proceso de aprendizaje.

📌 Notas finales

Asegurarse de que PostgreSQL esté activo antes de ejecutar el servidor

Ejecutar schema.sql antes de iniciar la API

Verificar correctamente las variables de entorno

Swagger disponible en /api-docs


🏁 Estado del proyecto

✔ API REST funcional

✔ CRUD completo (authors y posts)

✔ Arquitectura modular

✔ Base de datos PostgreSQL

✔ Documentación Swagger (OpenAPI)

