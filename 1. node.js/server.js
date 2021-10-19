const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('./index.html');
// const module = require('request');

// framework, module, package, library

// request, response
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === '/data') {
    res.write('[1, 2, 3, 4]');
    res.end();
    return;
  }
  if (req.url === '/') {
    res.write(homePage);
    res.end();
    return;
  }
  res.write('hello from node.js');
  res.end();
});

server.listen(3000);
