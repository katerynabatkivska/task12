const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><body>');

  const userName = os.userInfo().username;
  res.write(`Username: ${userName}<br>`);

  const osType = os.type();
  res.write(`OS Type: ${osType}<br>`);

  const uptimeMinutes = Math.round(os.uptime() / 60);
  res.write(`Uptime (minutes): ${uptimeMinutes}<br>`);

  const currentDirectory = process.cwd();
  res.write(`Current Directory: ${currentDirectory}<br>`);

  const serverFileName = path.basename(__filename);
  res.write(`Server File Name: ${serverFileName}<br>`);

  res.write('</body></html>');
  res.end();
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
