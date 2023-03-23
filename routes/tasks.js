const express = require("express");
const { getTasks, addTask, getTaskById, updateTaskById, deleteTaskById } = require("../controllers/tasks");
const router = express.Router();

/**
 * @swagger
 * /api/v1/tasks:
 *    get:
 *      summary: Get all tasks
 *      produces:
 *        - application/json
 *      tags:
 *        - Tasks
 *      responses:
 *        "200":
 *          description: Returns a list of all tasks
 *        "500":
 *          description: Internal server error
 *
 */
router.get("/", getTasks);

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *    get:
 *      summary: Get an task by ID
 *      produces:
 *        - application/json
 *      tags:
 *        - Tasks
 *      parameters:
 *        - in: path
 *          name: id
 *          description: task id
 *          type: integer
 *          required: true
 *          example: 1
 *      responses:
 *        "200":
 *          description: Returns a an task along with its data
 *        "404":
 *          description: User not found
 *        "500":
 *          description: Internal server error
 */
router.get("/:id", getTaskById);

/**
 * @swagger
 * /api/v1/tasks:
 *    post:
 *      summary: Creates a new task
 *      produces:
 *        - application/json
 *      tags:
 *        - Tasks
 *      requestBody:
 *        description: Data for new task
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                task:
 *                  type: string
 *                priority:
 *                  type: string
 *                  enum: [high, medium, low]
 *                state:
 *                  type: string
 *                  enum: [not-started, in-progress, done, archived]
 *              example:
 *                task: Breakfast
 *                priority: low
 *                state: not-started
 *      responses:
 *        "201":
 *          description: Returns created task
 *        "500":
 *          description: Internal server error
 */
router.post("/", addTask);

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *    put:
 *      summary: Updates an existing task
 *      produces:
 *        - application/json
 *      tags:
 *        - Tasks
 *      parameters:
 *        - in: path
 *          name: id
 *          description: task ID
 *          type: integer
 *          required: true
 *          example: 1
 *      requestBody:
 *        description: Data for new task
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                task:
 *                  type: string
 *                priority:
 *                  type: string
 *                  enum: [high, medium, low]
 *                state:
 *                  type: string
 *                  enum: [not-started, in-progress, done, archived]
 *              example:
 *                task: Breakfast
 *                priority: low
 *                state: not-started
 *      responses:
 *        "201":
 *          description: Returns updated task
 *        "404":
 *          description: task not found
 *        "500":
 *          description: Internal server error
 */
router.put("/:id", updateTaskById);

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *    delete:
 *      summary: Deletes an individual task
 *      produces:
 *        - application/json
 *      tags:
 *        - Tasks
 *      parameters:
 *        - in: path
 *          name: id
 *          description: task ID to delete
 *          type: integer
 *          required: true
 *          example: 1
 *      responses:
 *        "204":
 *          description: task deleted
 *        "500":
 *          description: Internal server error
 *        "404":
 *          description: task not found
 */
router.delete("/:id", deleteTaskById);

module.exports = router;
