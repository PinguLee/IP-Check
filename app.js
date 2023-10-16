const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer((request, response) => {
  serverErrorLog = () => {
    response.writeHead(500);
    return response.end('서버 에러');
  }

  if (req.url === '/' && req.method === 'GET') {
    fs.readFile('./static/index.html', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
    });
  };
});

server.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});