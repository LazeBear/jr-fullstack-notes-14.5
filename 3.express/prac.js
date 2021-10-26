const express = require('express');

const app = express();
const PORT = 3000;
/**
 * {
 *  "id": number,
 *  "description": string,
 *  "done": boolean
 * }
 */
const tasks = [];
let id = 0;

function cors(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
}

app.use(express.json());

app.use(cors);

//get all tasks(allow query params for filtering)
app.get('/tasks', (req, res) => {
  const { description } = req.query;
  if (description) {
    const filteredTasks = tasks.filter((i) =>
      i.description.includes(description)
    );
    return res.json(filteredTasks);
  }
  return res.json(tasks);
});

//get task by id
app.get('/tasks/:id', parseId, (req, res) => {
  const { id } = req.params;
  // +id
  const task = tasks.find((i) => i.id === id);
  if (!task) {
    return res.status(404).json({ error: 'task not found' });
  }
  return res.send(task);
});

//update a task
app.put('/tasks/:id', parseId, (req, res) => {
  const { id } = req.params;
  const { description, done } = req.body;

  const task = tasks.find((i) => i.id === id);
  if (!task) {
    return res.status(404).json({ error: 'task not found' });
  }

  if (done !== undefined) {
    // "123"  !"123" = false !!"123" = true
    task.done = !!done;
  }

  if (description) {
    task.description = '' + task.description;
  }

  return res.json(task);
});

//create a new task
app.post('/tasks', (req, res) => {
  const { description } = req.body;

  // description && isString && trim() 之后有值
  if (!description) {
    return res.status(400).json({ error: 'description is missing' });
  }

  // ++id, id++
  const task = {
    id: ++id,
    description,
    done: false,
  };
  tasks.push(task);
  return res.status(201).json(task);
});

// function remove(arr, value) {
//   return tasks.filter(function (ele) {
//     return ele != arr[value];
//   });
// }

//delete a task
app.delete('/tasks/:id', parseId, (req, res) => {
  const { id } = req.params;

  const taskIndex = tasks.findIndex((i) => i.id === id);
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'task not found' });
  }

  // splice, slice
  tasks.splice(taskIndex, 1);
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log('server listening on port 3000');
});

function parseId(req, res, next) {
  let { id } = req.params;
  req.params.id = Number(id);
  next();
}
