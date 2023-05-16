const http = require("http");

const server = new http.Server();

server.addListener("request", (request, response) => {
  response.write('<a href="https://www.google.com/">Hello</a> World');
  response.end();
});

server.listen(3000);
