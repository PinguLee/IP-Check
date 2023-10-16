const http = require('http');
const fs = require('fs');
const port = 8080

const server = http.createServer((req, res) => {});

server.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});