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
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor local"
      }
    ]
  },
  apis: ["./src/modules/**/*.routes.js"]
});

module.exports = {
  swaggerUi,
  swaggerSpec
};