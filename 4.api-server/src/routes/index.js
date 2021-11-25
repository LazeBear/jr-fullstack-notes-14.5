const express = require('express');
const taskRouter = require('./tasks');

const router = express.Router();

// /v1/tasks
router.use('/tasks', taskRouter);

module.exports = router;
