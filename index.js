const http = require('http');
const port = process.env.PORT || 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  let ra = getRandomInt(100000);
  const msg = `Hello Node 5(${ra})!\n`
  res.end(msg);
});


//test 2

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

//1
//2
//3