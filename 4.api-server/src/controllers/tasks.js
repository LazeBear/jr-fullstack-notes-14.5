const Task = require('../models/task');

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: Object
 *      required:
 *        - description
 *      properties:
 *        id:
 *          type: string
 *          description: auto generated unique identifier
 *        description:
 *          type: string
 *          description: description of the task
 *        done:
 *          type: boolean
 *          description: status of the task
 *      example:
 *          id: 1
 *          description: task 1
 *          done: false
 *
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: return all tasks
 *    tags: [Tasks]
 *    parameters:
 *      - name: description
 *        in: query
 *        description: filter tasks by description
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: array of tasks
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Task'
 */
function getAllTasks(req, res) {
  const { description } = req.query;
  const tasks = Task.getAllTasks({ description });
  return res.json(tasks);
}

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *    summary: Get task by id
 *    tags: [Tasks]
 *    parameters:
 *      - name: id
 *        in: path
 *        description: task id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: The task by id
 *        content:
 *          application/json:
 *            schema:
 *               $ref: '#/components/schemas/Task'
 *      404:
 *        description: Task not found
 *
 */
function getTaskById(req, res) {
  const { id } = req.params;
  // +id
  const task = Task.getTaskById(id);
  // if (!task) {
  //   return res.status(404).json({ error: 'task not found' });
  // }
  return res.send(task);
}

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *    summary: Update a task
 *    tags: [Tasks]
 *    parameters:
 *      - name: id
 *        in: path
 *        description: task id
 *        required: true
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: The task successfully updated
 *        content:
 *          application/json:
 *            schema:
 *               $ref: '#/components/schemas/Task'
 *      404:
 *        description: Task not found
 *
 */
function updateTaskById(req, res) {
  const { id } = req.params;
  const { description, done } = req.body;

  const task = Task.updateTaskById(id, { description, done });

  // if (!task) {
  //   return res.status(404).json({ error: 'task not found' });
  // }

  return res.json(task);
}

/**
 * @swagger
 * /tasks:
 *   post:
 *    summary: Create a new task
 *    tags: [Tasks]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      201:
 *        description: The task successfully added
 *        content:
 *          application/json:
 *            schema:
 *               $ref: '#/components/schemas/Task'
 *
 */
function addTask(req, res) {
  const { description } = req.body;

  // description && isString && trim() 之后有值
  if (!description) {
    return res.status(400).json({ error: 'description is missing' });
  }
  const task = Task.addTask({ description });
  // ++id, id++

  return res.status(201).json(task);
}

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *    summary: Delete a task
 *    tags: [Tasks]
 *    parameters:
 *      - name: id
 *        in: path
 *        description: task id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      204:
 *        description: The task successfully deleted
 *      404:
 *        description: Task not found
 *
 */
function deleteTaskById(req, res) {
  const { id } = req.params;

  Task.deleteTaskById(id);

  // if (taskIndex === -1) {
  //   return res.status(404).json({ error: 'task not found' });
  // }

  res.sendStatus(204);
}

module.exports = {
  addTask,
  getTaskById,
  getAllTasks,
  updateTaskById,
  deleteTaskById,
};
