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
    return response.end('Server Error');
  }

  if (request.url === '/' && request.method === 'GET') {
    fs.readFile('./static/index.html', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      response.writeHead(200, ContentTypeHTML);
      response.end(data);
    });
  } else if (request.url === '/css/style.css' && request.method === 'GET') {
    fs.readFile('./static/css/style.css', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      response.writeHead(200, ContentTypeCSS);
      response.end(data);
    });
  } else if (request.url === '/scripts/script.js' && request.method === 'GET') {
    fs.readFile('./static/scripts/script.js', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      response.writeHead(200, ContentTypeJavaScript);
      response.end(data);
    });
  } else {
    response.writeHead(404);
    response.end('404 Not Found');
  }
});

server.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});