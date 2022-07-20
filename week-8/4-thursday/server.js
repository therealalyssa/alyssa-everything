const http = require("http");

const server = http.createServer(function (request, response) {
  //Endpoint 1
  if (request.url === "/") {
    response.write("Hello World");
    response.end();
  }
  // Endpoint 2
  if (request.url === "/api/userList") {
    // A dummy list (a javascript array of Objects)
    const userList = [
      { name: "john", age: 27 },
      { name: "joe", age: 55 },
      { name: "adam", age: 22 },
    ];

    //Convert the userList JS array to string so that it can be sent via web server.
    // Comms between servers must always be in JSON
    response.write(JSON.stringify(userList));
    response.end();
  }
  //Endpoint 3
  if (request.url === "/api/greet") {
    response.write("Hello Rob, thanks for visiting this URL 🙌 ");
    response.end();
  }
});

// Expose port 4000 so that we can send requests there
server.listen(4000);
console.log("I think the server is runnning");
