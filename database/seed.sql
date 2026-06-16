const pool = require("./database"); // Asegurate de poner la ruta correcta a tu archivo database.js

const runSeed = async () => {
  try {
    console.log("🌱 Iniciando la carga de datos de prueba...");

    
    await pool.query("TRUNCATE TABLE posts, authors RESTART IDENTITY CASCADE;");
    console.log("🧹 Base de datos limpia para el seed...");

 
    const authorsQuery = `
      INSERT INTO authors (name, email, bio)
      VALUES
      ('Ana García', 'ana@example.com', 'Desarrolladora full-stack apasionada por Node.js'),
      ('Carlos Ruiz', 'carlos@example.com', 'Escritor técnico especializado en bases de datos'),
      ('María López', 'maria@example.com', 'Ingeniera de software con foco en APIs REST'),
      ('Gisella Massiero', 'gise@gmail.com', 'Autor de ejemplo');
    `;
    await pool.query(authorsQuery);
    console.log("👤 Autores insertados...");

    const postsQuery = `
      INSERT INTO posts (author_id, title, content, published)
      VALUES
      ((SELECT id FROM authors WHERE email = 'ana@example.com'), 'Introducción a Node.js', 'Node.js es un entorno de ejecución de JavaScript...', true),
      ((SELECT id FROM authors WHERE email = 'ana@example.com'), 'Buenas prácticas en Express', 'Organizar bien rutas y middlewares mejora la escalabilidad de la API.', false),
      ((SELECT id FROM authors WHERE email = 'carlos@example.com'), 'SQL vs NoSQL', 'SQL es estructurado y NoSQL es flexible dependiendo del caso de uso.', true),
      ((SELECT id FROM authors WHERE email = 'carlos@example.com'), 'Optimización de consultas SQL', 'Los índices y el diseño de tablas mejoran el rendimiento.', false),
      ((SELECT id FROM authors WHERE email = 'maria@example.com'), 'Diseño de APIs REST', 'Una API REST debe ser clara y consistente.', true),
      ((SELECT id FROM authors WHERE email = 'maria@example.com'), 'Errores comunes en APIs', 'Validación y manejo de errores son claves en cualquier API.', true),
      ((SELECT id FROM authors WHERE email = 'gise@gmail.com'), 'Mi primer post en el blog', 'Post de prueba para demostrar la API funcionando.', true);
    `;
    await pool.query(postsQuery);

    console.log("✅ ¡Datos cargados con éxito en la base de datos!");
  } catch (error) {
    console.error("❌ Error al cargar el seed:", error);
  } finally {
    await pool.end(); 
  }
};

runSeed();