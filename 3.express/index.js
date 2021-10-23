const express = require('express');

const app = express();

const data = [];

app.use(express.json()); // express.json() 是一个middleware

// application.method(path, route handler[callback])
app.get('/', (req, res) => {
  res.json({ name: 'mason' });
  // res.send('hello world!!!!!');

  // status code
  // res.send(), res.json() -> 200
  // res.status(201).send() -> 设置状态码，并把数据放在body里返回
  // res.sendStatus(204) -> 只返回状态码，body里是状态码相应的描述
});

/**
 * 从request获取数据的3种方法
 * 1. body       -> POST, PUT, PATCH
 *    req.body ()
 * 2. query param   -> GET
 *    req.query
 * 3. route param   -> GET, POST, PUT, PATCH, DELETE, 大多数都是id
 *    /:id -> request.params
 */
//        /v1/trainers/12345
app.post('/v1/trainers/:id/pokemon/:pokemonId', (req, res) => {
  const { name } = req.body;
  const { title } = req.query;
  const { id, pokemonId } = req.params;
  res.send({ name, title, id, pokemonId });
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
});
