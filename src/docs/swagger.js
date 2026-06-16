const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blog API",
      version: "1.0.0",
      description: "API REST de blog con Node.js, Express y PostgreSQL"
    },

 
    tags: [
      {
        name: "Authors",
        description: "Gestión de autores"
      },
      {
        name: "Posts",
        description: "Gestión de posts"
      }
    ],

    servers: [
      {
        url: "https://proyectom2gisellamassiero-production.up.railway.app",
        description: "Servidor de Producción (Railway)"
      },
      {
        url: "http://localhost:3000",
        description: "Servidor Local (Desarrollo)"
      }
    ]
  },

  apis: ["./src/modules/**/*.js"]
});

module.exports = {
  swaggerUi,
  swaggerSpec
};