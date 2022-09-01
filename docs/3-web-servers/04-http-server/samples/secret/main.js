const http = require("http");

const server = new http.Server();

server.addListener("request", (request, response) => {
    if (request.url === "/") {
        response.write(`<a href="/secret">Click me!</a>`);
    }
    else if (request.url === "/secret") {
        response.write("Secret");
    }
    response.end();
});

server.listen(3000);
