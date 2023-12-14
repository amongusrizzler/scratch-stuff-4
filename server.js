import { readFile } from 'fs';
import { createServer } from 'http';

createServer((req, res) => {
  readFile(__dirname + /public/ + req.url, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      readFile(__dirname + "/public/404.html", (err, data) => {
        res.end(data);
      });
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
}).listen(8000);