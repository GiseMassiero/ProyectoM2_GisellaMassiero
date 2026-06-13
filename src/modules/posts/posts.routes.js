const express = require("express");
const router = express.Router();

const controller = require("./posts.controller");
const validatePosts = require("../../middlewares/validatePosts");

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Gestión de posts del blog
 */

/**
 * @swagger
 * /posts/author/{authorId}:
 *   get:
 *     summary: Obtener posts por autor
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: authorId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del autor
 *     responses:
 *       200:
 *         description: Lista de posts del autor
 *         content:
 *           application/json:
 *             example:
 *               [
 *                 {
 *                   id: 1,
 *                   title: "Introducción a Node.js",
 *                   content: "Node.js es un runtime...",
 *                   author_id: 1,
 *                   published: true
 *                 }
 *               ]
 *       404:
 *         description: Autor no encontrado o sin posts
 */
router.get("/author/:authorId", controller.getByAuthor);

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Obtener todos los posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Lista de posts obtenida correctamente
 *         content:
 *           application/json:
 *             example:
 *               [
 *                 {
 *                   id: 1,
 *                   title: "Post ejemplo",
 *                   content: "Contenido del post",
 *                   author_id: 1,
 *                   published: true
 *                 }
 *               ]
 */
router.get("/", controller.getAll);

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Obtener post por ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del post
 *     responses:
 *       200:
 *         description: Post encontrado
 *       404:
 *         description: Post no encontrado
 */
router.get("/:id", controller.getById);

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Crear un post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - author_id
 *               - title
 *               - content
 *             properties:
 *               author_id:
 *                 type: integer
 *                 example: 1
 *               title:
 *                 type: string
 *                 example: Introducción a Node.js
 *               content:
 *                 type: string
 *                 example: Node.js es un runtime de JavaScript...
 *               published:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Post creado correctamente
 *       400:
 *         description: Error de validación
 */
router.post("/", validatePosts, controller.create);

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Actualizar un post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Nuevo título
 *               content:
 *                 type: string
 *                 example: Nuevo contenido
 *               published:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       200:
 *         description: Post actualizado correctamente
 *       404:
 *         description: Post no encontrado
 */
router.put("/:id", validatePosts, controller.update);

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Eliminar un post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Post eliminado correctamente
 *       404:
 *         description: Post no encontrado
 */
router.delete("/:id", controller.remove);

module.exports = router;