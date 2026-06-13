const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

console.log("✔ Express inicializado");

let authorsRoutes;
let postsRoutes;
let errorHandler;
let swaggerUi, swaggerSpec;

try {
  authorsRoutes = require("./modules/authors/authors.routes");
  console.log("✔ authorsRoutes OK");

  postsRoutes = require("./modules/posts/posts.routes");
  console.log("✔ postsRoutes OK");

  ({ swaggerUi, swaggerSpec } = require("./docs/swagger"));
  console.log("✔ swagger OK");

  errorHandler = require("./middlewares/errorHandler");
  console.log("✔ errorHandler OK");

} catch (error) {
  console.error("❌ ERROR AL IMPORTAR MÓDULOS:");
  console.error(error);

 
  if (process.env.NODE_ENV !== "test") {
    process.exit(1);
  }
}


app.use("/authors", authorsRoutes);
app.use("/posts", postsRoutes);


app.get("/", (req, res) => {
  res.json({ message: "API funcionando 🚀" });
});


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use(errorHandler);

module.exports = app;