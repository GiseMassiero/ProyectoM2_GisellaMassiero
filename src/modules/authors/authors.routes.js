const express = require("express");
const router = express.Router();

const controller = require("./authors.controller");
const validateAuthors = require("../../middlewares/validateAuthors");

/**
 * @swagger
 * tags:
 *   name: Authors
 *   description: Gestión de autores
 */

/**
 * @swagger
 * /authors:
 *   get:
 *     summary: Obtener todos los autores
 *     tags: [Authors]
 *     responses:
 *       200:
 *         description: Lista de autores obtenida correctamente
 *         content:
 *           application/json:
 *             example:
 *               [
 *                 {
 *                   id: 1,
 *                   name: "Ana García",
 *                   email: "ana@example.com",
 *                   bio: "Desarrolladora full-stack"
 *                 }
 *               ]
 */
router.get("/", controller.getAll);

/**
 * @swagger
 * /authors/{id}:
 *   get:
 *     summary: Obtener autor por ID
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del autor
 *     responses:
 *       200:
 *         description: Autor encontrado
 *       404:
 *         description: Autor no encontrado
 */
router.get("/:id", controller.getById);

/**
 * @swagger
 * /authors:
 *   post:
 *     summary: Crear un autor
 *     tags: [Authors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 example: Ana García
 *               email:
 *                 type: string
 *                 example: ana@example.com
 *               bio:
 *                 type: string
 *                 example: Desarrolladora full-stack
 *     responses:
 *       201:
 *         description: Autor creado correctamente
 *       400:
 *         description: Error de validación
 */
router.post("/", validateAuthors, controller.create);

/**
 * @swagger
 * /authors/{id}:
 *   put:
 *     summary: Actualizar un autor
 *     tags: [Authors]
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
 *               name:
 *                 type: string
 *                 example: Ana García
 *               email:
 *                 type: string
 *                 example: ana@example.com
 *               bio:
 *                 type: string
 *                 example: Backend developer
 *     responses:
 *       200:
 *         description: Autor actualizado correctamente
 *       404:
 *         description: Autor no encontrado
 */
router.put("/:id", validateAuthors, controller.update);

/**
 * @swagger
 * /authors/{id}:
 *   delete:
 *     summary: Eliminar un autor
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Autor eliminado correctamente
 *       404:
 *         description: Autor no encontrado
 */
router.delete("/:id", controller.remove);

module.exports = router;