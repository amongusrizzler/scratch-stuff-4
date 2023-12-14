const http = require("http");
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;

const index = fs.readFile(__dirname + "/public/index.html");

const requestListener = function (req, res) {
    fs.readFile(__dirname + "/public" + req.url)
    .then(contents => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
    })
    .catch(err => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(index);
        return;
    });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});