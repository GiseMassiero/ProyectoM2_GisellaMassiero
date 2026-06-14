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
        url: process.env.BASE_URL || "http://localhost:3000",
        description: "Servidor (local o producción)"
      }
    ]
  },


  apis: ["./src/modules/**/*.js"]
});

module.exports = {
  swaggerUi,
  swaggerSpec
};