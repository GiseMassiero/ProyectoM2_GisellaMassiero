
📚 Blog API - Node.js + Express + PostgreSQL

---

📌 Descripción del proyecto

Este proyecto es una API REST para un sistema de blog que permite gestionar autores y posts.

La API permite realizar operaciones CRUD completas sobre ambas entidades:

* Crear
* Leer
* Actualizar
* Eliminar

Está desarrollada con:

* Node.js
* Express
* PostgreSQL

---

🧱 Arquitectura

El proyecto sigue una arquitectura modular por capas:

* routes
* controllers
* services
* database
* middlewares

Además, incluye documentación interactiva con Swagger (OpenAPI).

---

⚙️ Requisitos

Antes de ejecutar el proyecto, asegurarse de tener instalado:

-Node.js (v16 o superior)
-PostgreSQL
-npm
-Git (opcional)

---

🚀 Instalación y ejecución local:

1️⃣ Clonar el repositorio
git clone https://github.com/GiseMassiero/ProyectoM2_GisellaMassiero

cd ProyectoM2_GisellaMassiero

2️⃣ Instalar dependencias:

npm install

3️⃣ Configurar variables de entorno:


Crear un archivo .env en la raíz del proyecto:

DB_USER=postgres

DB_PASSWORD=tu_password

DB_HOST=localhost

DB_PORT=5432

PORT=3000

DB_NAME=BLOG_API


4️⃣ Crear base de datos:

Ejecutar el archivo:

database/schema.sql

Esto crea las tablas:

* authors

* posts


5️⃣ Cargar datos de prueba (seed):

El proyecto incluye un script preparado para poblar tu base de datos local con autores y posts de prueba (incluyendo contenido publicado y borradores). Ejecutalo con:


npm run seed

6️⃣ Ejecutar el servidor:

- npm run dev

El servidor quedará disponible en:

http://localhost:3000

---

📡 Documentación de la API (Swagger / OpenAPI)

La documentación interactiva está disponible en:

- 💻 Local: http://localhost:3000/api-docs (con el servidor corriendo en tu máquina)

- 🚀 Producción: https://proyectom2gisellamassiero-production.up.railway.app/api-docs 
(desplegado en vivo en Railway)

<img width="976" height="365" alt="image" src="https://github.com/user-attachments/assets/4548ce87-fcb0-4957-b166-341efec3fb22" />


Desde allí se pueden probar todos los endpoints directamente.

<img width="1560" height="780" alt="image" src="https://github.com/user-attachments/assets/8bd3ac60-6ae9-4672-a069-3547c8d08d19" />


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

📊 Estado de los posts:

* Los posteos incluyen una propiedad booleana para filtrar su visibilidad:

published: true → post publicado

published: false → borrador


<img width="1543" height="728" alt="Captura de pantalla_12-6-2026_221223_localhost" src="https://github.com/user-attachments/assets/a0c11c7d-4e8c-4b7a-8bb3-f879397cc280" />

---

🧪 Tests

Este proyecto utiliza Jest y Supertest para la ejecución de pruebas de integración y unitarias sobre el entorno aislado de desarrollo.

▶️ Ejecutar tests: 

npm test

🧪 Modo detallado (opcional)

npx jest --runInBand



⚠️ Importante

Si es la primera vez que clonas el proyecto:

npm install

Luego ejecutar:

npm test

---

## 🌍 Deployment (Railway)

El proyecto se encuentra completamente desplegado y operativo en la nube de Railway.

🔗 Base URL Pública: https://proyectom2gisellamassiero-production.up.railway.app

<img width="665" height="674" alt="image" src="https://github.com/user-attachments/assets/a74a6556-ec37-4976-95fc-4d40d425fd68" />


📚 Documentación Swagger en Producción: 
https://proyectom2gisellamassiero-production.up.railway.app/api-docs

---

🔐 Variables de entorno en producción

A diferencia del entorno local de desarrollo, en Railway el servicio se conecta de forma segura a través de la infraestructura interna de la plataforma utilizando una variable integrada dinámica:

DATABASE_URL (Gestionada y provista automáticamente por Railway de forma privada)


🚀 Pasos realizados para el despliegue:

1.  Subida del proyecto controlado a un repositorio de GitHub de manera versionada.

2. Vinculación y aprovisionamiento del entorno web en Railway.

3. Creación y enlace privado del servicio backend con una instancia Cloud de PostgreSQL.

4. Inyección del String de conexión dinámico con soporte SSL robusto mediante un Pool de conexiones híbrido.

5. Inicialización de datos de prueba (Poblado de base de datos remota) ejecutando directamente en la terminal remota de Railway el comando:

npm run seed

---

🤖 Uso de Inteligencia Artificial:

Durante el desarrollo de este proyecto se utilizaron herramientas de Inteligencia Artificial (Chat GPT -Gemini ) como apoyo para comprender conceptos, resolver dudas técnicas y mejorar la calidad del código. 


1. Organización de la estructura del proyecto

Prompt:

"¿Cuál es una estructura recomendada para una API REST en Node.js utilizando Express, PostgreSQL y arquitectura por capas?"

Impacto en el proyecto:

Permitió organizar el código en carpetas separadas para rutas, controladores, modelos y configuración de base de datos, mejorando la mantenibilidad y claridad del proyecto.


<img width="834" height="756" alt="Captura de pantalla_12-6-2026_221412_chatgpt com" src="https://github.com/user-attachments/assets/95d4ea2f-4d05-49a6-9e75-4178cc6249d8" />


2. Resolución de errores

Prompt:

"Estoy obteniendo el siguiente error al conectar PostgreSQL con Node.js: [mensaje de error]. ¿Qué puede estar ocurriendo?"

Impacto en el proyecto:

Facilitó la identificación y corrección de problemas relacionados con variables de entorno, conexiones a la base de datos y configuración de dependencias.

3. Creación del README

Prompt:

"Ayúdame a redactar un README profesional para una API REST desarrollada con Node.js, Express, PostgreSQL, Swagger y Railway."

Impacto en el proyecto:

Sirvió como base para la documentación final del repositorio, incluyendo instalación, configuración, ejecución local, testing y deployment.

4. Deployment en Railway

Prompt:

"¿Cómo desplegar una API Node.js con PostgreSQL en Railway y configurar correctamente las variables de entorno?"

Impacto en el proyecto:

Ayudó a comprender el proceso de despliegue, configuración de variables de entorno y conexión a la base de datos en producción.

Reflexión sobre el uso de IA

La Inteligencia Artificial fue utilizada como una herramienta de apoyo para investigar soluciones, comprender conceptos y mejorar la documentación del proyecto.

 Todas las respuestas obtenidas fueron analizadas, verificadas y adaptadas antes de ser incorporadas al desarrollo final. 

 Su uso permitió agilizar tareas de investigación y documentación, manteniendo siempre el criterio y validación humana en las decisiones de implementación.


---

🏁 Estado del proyecto:

✔ API REST funcional

✔ CRUD completo (authors y posts)

✔ Arquitectura modular

✔ Base de datos PostgreSQL

✔ Documentación Swagger (OpenAPI)

✔ Suite de 13 tests unitarios/integración validados en verde

<img width="588" height="819" alt="image" src="https://github.com/user-attachments/assets/6533662f-7b2e-43f2-bcdb-4865d8e02c4a" />

<img width="580" height="713" alt="image" src="https://github.com/user-attachments/assets/fca512a8-38e8-43ae-a1ab-0a11f1353e0d" />
