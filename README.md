📚 Blog API - Node.js + Express + PostgreSQL

📌 Descripción del proyecto

Este proyecto es una API REST para un sistema de blog que permite gestionar autores y posts.

La API permite realizar operaciones CRUD sobre ambas entidades y está construida con Node.js, Express y PostgreSQL, aplicando una arquitectura modular basada en capas (routes, controllers, services y db).

Además, incluye documentación con Swagger (OpenAPI) para facilitar la prueba y comprensión de los endpoints.

---

⚙️ Requisitos

Antes de ejecutar el proyecto necesitas tener instalado:

Node.js (v16 o superior)
PostgreSQL
npm
Git (opcional)
---

 Instalación y ejecución local

1️⃣ Clonar el repositorio
git clone <URL-DEL-REPO>
cd blog-api

---

2️⃣ Instalar dependencias
npm install

--- 

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

El servidor corre en:

http://localhost:3000


📡 Endpoints de la API
👤 Authors
GET /authors → Obtener todos los autores
GET /authors/:id → Obtener autor por ID
POST /authors → Crear autor
PUT /authors/:id → Actualizar autor
DELETE /authors/:id → Eliminar autor


📝 Posts
GET /posts → Obtener todos los posts
GET /posts/:id → Obtener post por ID
GET /posts/author/:authorId → Obtener posts por autor
POST /posts → Crear post
PUT /posts/:id → Actualizar post
DELETE /posts/:id → Eliminar post


📄 Documentación OpenAPI (Swagger)

Este proyecto utiliza Swagger para documentar la API.

🔗 Acceso a la documentación:

http://localhost:3000/api-docs


▶️ Cómo ejecutarlo
Ejecutar el servidor:
npm run dev

Abrir en el navegador:
/api-docs

Allí podrás ver y probar todos los endpoints.

🧪 Tests

Para ejecutar tests:

Actualmente el proyecto no incluye tests automatizados.
Las pruebas se realizan mediante Thunder Client.


🌍 Deployment (Railway)

Este proyecto puede ser desplegado en Railway.

IMPORTANTE: En Railway, el puerto debe configurarse automáticamente con:
PORT=process.env.PORT

Variables de entorno en producción:
DB_USER
DB_PASSWORD
DB_HOST
DB_PORT
DB_NAME


Pasos:
Subir el proyecto a GitHub
Conectar repositorio en Railway
Configurar variables de entorno
Deploy automático


🔗 URL pública:
URL pública: Pendiente de deployment


🤖 Uso de Inteligencia Artificial

Durante el desarrollo del proyecto utilicé inteligencia artificial (ChatGPT) como herramienta de apoyo para:

Organización de la estructura de carpetas
explicación de términos y sus funciones
Documentación del proyecto (README)
Implementación de Swagger (OpenAPI)
Resolución de dudas técnicas sobre Node.js, Express y PostgreSQL
Mejora de buenas prácticas en arquitectura modular

(La IA fue utilizada como asistente educativo, sin reemplazar el desarrollo del código ni el aprendizaje)

📌 Notas finales
Verificar que PostgreSQL esté activo antes de ejecutar el servidor

Ejecutar schema.sql antes de iniciar la API

Revisar correctamente las variables de entorno

Swagger disponible en /api-docs

🏁 Estado del proyecto

✔ API REST funcional
✔ CRUD completo (authors y posts)
✔ Arquitectura modular
✔ Base de datos PostgreSQL
✔ Documentación Swagger (OpenAPI)
