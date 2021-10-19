异步
同步

console.log(1);
setTimeout(()=>{
console.log(2);
},1000);
console.log(3);

JS 是单线程语言

进程 (process)
线程 (thread)

阻塞 (blocking)

等待 = 阻塞 = 同步
不等待 = 非阻塞 = 异步
事件触发

heap 和 stack，用来存数据的
call stack

stack -> FILO
queue -> FIFO

Event loop 工作原理
代码从上到下执行
碰到异步，先注册（登记），事件触发或者完成后，进入 callback queue
当同步代码执行完（callstack 为空的时候）
event loop 会把 callback queue 里的第一个事件放入 callstack 进行执行
loop 的循环开始
