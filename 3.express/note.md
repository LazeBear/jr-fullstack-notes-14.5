<!-- -- package.json
-- package-lock.json
-- src
  |-- index.js 入口文件 (server.js, app.js) 实现 app创建和监听的地方
  |-- routes (每一个文件就是一个router)
    |-- tasks.js (task.js) 文件单复数，整个项目保持一致 创建taskRouter (GET, POST, PUT, DELETE)
    |-- users.js
    |-- resources.js
    |-- index.js (把其他的router全部导入进来， 做一个单一的导出)
  |-- controllers 逻辑处理
    |-- tasks.js (taskController.js, task.controller.js) route handler
    |-- users.js
    |-- resources.js
  |-- models
    |-- task.js (Task.js) 数据库中task数据的数据格式设计，和跟数据库的交互
    |-- users.js
    |-- resources.js
  |-- middleware
    |-- errorHandler
    |-- parseId, authCheck, authGuard
  |-- utils     (helper function, shared function) -->
