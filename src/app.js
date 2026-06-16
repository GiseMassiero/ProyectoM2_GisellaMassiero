const express = require("express");
const cors = require("cors");

const app = express();

console.log("✔ Express inicializado");


app.use(cors({
  origin: "*"
}));

app.use(express.json());


let authorsRoutes;
let postsRoutes;
let errorHandler;
let swaggerUi, swaggerSpec;

try {
  authorsRoutes = require("./modules/authors/authors.routes");
  postsRoutes = require("./modules/posts/posts.routes");
  ({ swaggerUi, swaggerSpec } = require("./docs/swagger"));
  errorHandler = require("./middlewares/errorHandler");

  console.log("✔ Módulos cargados correctamente");

} catch (error) {
  console.error("❌ ERROR AL IMPORTAR MÓDULOS:");
  console.error(error);
}


if (authorsRoutes) app.use("/authors", authorsRoutes);
if (postsRoutes) app.use("/posts", postsRoutes);


app.get("/", (req, res) => {
  res.json({ message: "API funcionando 🚀" });
});


if (swaggerUi && swaggerSpec) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}


if (errorHandler) {
  app.use(errorHandler);
}

module.exports = app;