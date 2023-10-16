const http = require('http');
const fs = require('fs');
const port = 8080;
const ContentTypeHTML = {
  'Content-Type': 'text/html'
};
const ContentTypeCSS = {
  'Content-Type': 'text/css'
};
const ContentTypeJavaScript = {
  'Content-Type': 'application/javascript'
};

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
      response.writeHead(200, ContentTypeHTML);
      res.end(data);
    });
  } else if (req.url === '/css/style.css' && req.method === 'GET') {
    fs.readFile('./static/css/style.css', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      response.writeHead(200, ContentTypeCSS);
      response.end(data);
    });
  }
});

server.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});