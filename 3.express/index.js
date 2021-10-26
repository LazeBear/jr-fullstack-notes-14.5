const express = require('express');

const app = express();

const data = [];

// currying function
// app level middleware
// 尽量写在最上面
app.use(express.json()); // express.json() 是一个middleware

// application.method(path, route handler[callback])
// regex
// app.get(path, ...middleware)
// app.get('/', m1,m2,m3,m4, routeHandler);
app.get('/', (req, res, next) => {
  try {
    asyncFunction
  } catch(e) {
    // 在这里处理错误
    // 把错误传给error handler
    next(e);
  }
  res.json({ name: 'mason' });
  // res.send('hello world!!!!!');

  // status code
  // res.send(), res.json() -> 200
  // res.status(201).send() -> 设置状态码，并把数据放在body里返回
  // res.sendStatus(204) -> 只返回状态码，body里是状态码相应的描述
});

const m1 = (req, res, next) => {
  if (true) {
    res.json({});
    return;
  }
  next();
}

const errorMiddleware = (error, req, res, next) =>{
  if (error instanceof ValidationError) {
    res.status(400).json({error: "xxxx"});
    return;
  }
  next();
}

const lastErrorHandler = (error, req, res, next) =>{

  console.log(error);
  res.status(500).json({error: "server cannot handle your request now"});
}

// class ValidaitonError extends Error {

// }

// next(new ValidationError("xxxxxx"));

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


const taskRouter = express.Router();
app.use('/v1', taskRouter);

// '/v1/*' '/v1*'
// GET /v1 ,   /v1/tasks
// app.all()
taskRouter.use(m1);
taskRouter.get('/tasks', (req, res) =>{
  res.send('task route');
})


// GET /v1/tasks

app.listen(3000, () => {
  console.log('server listening on port 3000');
});
