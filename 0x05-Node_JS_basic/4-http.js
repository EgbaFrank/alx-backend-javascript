// create a small HTTP server
const { createServer } = require('node:http');

const PORT = 1245;
const HOST = '0.0.0.0';

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

module.exports = app;
