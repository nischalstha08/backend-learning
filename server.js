//here const helps create a variable 'http' which won't change
//require('http') imports Node.js built in Http tool or package
const http = require('http');

//here const creates a variable server; http.createServer() uses the toolbox to create server
//(req, res) it is a function that runs everytime someone visits your server
const server = http.createServer((req, res) => {

  console.log('Someone visited:', req.url);

  //check which page they want
  if (req.url == '/'){
    res.end('Welcome to my server');
  } else if (req.url == '/about') {
    res.end('About page');
  } else if (req.url == '/contact') {
    res.end('Email: hello@example.com');
  } else {
    res.end('404 - Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});