function getGreeting(username) {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Доброго ранку';
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = 'Доброго дня';
  } else if (currentHour >= 17 && currentHour < 21) {
    greeting = 'Доброго вечора';
  } else {
    greeting = 'Доброї ночі';
  }

  return `${greeting}, ${username}!`;
}

module.exports = { getGreeting };

//////////////////////////////Node.js

const http = require('http');
const personalModule = require('./personalmodule');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><body>');

  // Отримання ім'я користувача (можна замінити на реальне ім'я користувача)
  const username = 'John';

  // Використання функції з модуля personalmodule для отримання привітання
  const greeting = personalModule.getGreeting(username);

  res.write(`<p>${greeting}</p>`);
  res.write('</body></html>');
  res.end();
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
