const readFile = require('fs').readFile;
const createServer = require('http').createServer;

const port = 8000;

createServer((req, res) => {
  readFile(__dirname + /public/ + req.url, (err, data) => {
    if (req.url == "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        readFile(__dirname + "/public/index.html", (err, data) => {
            res.end(data);
          });
    } else if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      readFile(__dirname + "/public/404.html", (err, data) => {
        res.end(data);
      });
    } else {
      res.writeHead(200, { 'Content-Type': `text/${req.url.split('.').pop() === "js" ? req.url.split('.').pop() : "javascript"}` });
      res.end(data);
    }
  });
}).listen(port);

console.log(`Listening on port ${port}`);