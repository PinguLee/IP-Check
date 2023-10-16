const http = require('http');
const fs = require('fs');
const port = 8080;

serverErrorLog = () => {
  response.writeHead(500);
  return response.end('서버 에러');
}

const server = http.createServer((request, response) => {
  
});

server.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});