const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/write') {
    const inputData = parsedUrl.query.data || '';
    fs.writeFile('data.txt', inputData, (err) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Помилка при записі до файлу.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Інформація була успішно записана до файлу.');
      }
    });
  } else if (parsedUrl.pathname === '/read') {
    fs.readFile('data.txt', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Помилка при зчитуванні файлу.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Сторінка не знайдена.');
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});
