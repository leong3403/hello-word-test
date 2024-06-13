const http = require('http');
const port = process.env.PORT || 3000;

let server = getRandomInt(100);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  let ra = getRandomInt(100000);
  const msg = `Hello Node, by server ${server} , (${ra})!\n`
  res.end(msg);
});


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

