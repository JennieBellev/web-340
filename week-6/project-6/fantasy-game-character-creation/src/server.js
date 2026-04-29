const http = require('http');
const url = require('url');

let characterData = null; // This is our "memory" that stays alive while the server is running

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // Window A: Create
  if (req.method === 'POST' && parsedUrl.pathname === '/create') {
    characterData = parsedUrl.query;
    res.writeHead(201);
    res.end('Character created!');
  } 
  // Window B: Confirm
  else if (req.method === 'POST' && parsedUrl.pathname === '/confirm') {
    res.writeHead(200);
    res.end('Character creation confirmed!');
  } 
  // Window C: View
  else if (req.method === 'GET' && parsedUrl.pathname === '/view') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(characterData)); // Hand over the character from memory
  } 
  else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000); // Make sure this is here!

module.exports = server;