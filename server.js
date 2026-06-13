const app = require("./src/app");
const PORT = process.env.PORT || 3000;

let server;

function start() {
  if (!server) {
    server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
  return server;
}

function close() {
  if (server) {
    server.close();
  }
}

if (process.env.NODE_ENV !== "test") {
  start();
}

module.exports = { app, start, close };