function fetchData(url, cb) {
  setTimeout(() => {
    cb(url);
  }, 1000);
}

// fetchData('example.com', (data) => {
//   fetchData('example.com', (data) => {
//     fetchData('example.com', (data) => {
//       console.log(data);
//     });
//   });
// });

// Promise
/**
 * 三种状态
 * pending resolved(fulfilled) rejected
 *
 * 状态是不可逆的
 * pending -> resolved
 * pending -> rejected
 *
 * 为了监听，为了得到resolved的结果，我们用.then来获取结果
 * .then, 接收一个callback，这个callback返回的是一个新的promise
 * 为了抓取错误，我们用.catch
 * .catch, 接收一个callback，这个callback返回的是一个新的promise
 *
 */
// response, rejected
const promise = new Promise((res, rej) => {
  // res();
  // rej();
  setTimeout(() => {
    rej({ name: 'mason' });
  }, 1000);
});

// promise chain
promise
  .then((result) => {
    console.log(result);
    return 1;
  })
  .catch((error) => {
    console.log('error', error);
    // return undefined;
  })
  .then((result) => {
    console.log(result);
  });

// syntax sugar
// async await
// 一旦出现await，一定要写async关键字（在function前面）
async function main() {
  try {
    const result = await promise;
  } catch (e) {
    console.log(e);
  }
  // await 后面的内容，其实全在promise的callback里
  const a = await 1;
  // const a = await Promise.resolve(1);
}

main();
console.log(1);

// promise 他有自己的callback queue
// promise -> micro task queue (ES)
// setTimeout, addEventListener -> macro task queue
