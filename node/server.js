const http = require("node:http");

// define the port number the server will listen on
const PORT = 8000;
// create the server
// line no 7to 14 we are making server
const server = http.createServer(function (req, res) {
  console.log("Hello u went to the wbesite check there");
  //  set the response headers
  res.writeHead(201, { "Content-Type": "text/plain" });
  //  Write the response body
  res.end(
    "Hello the person who is using this laptop is currently dead she might revive anytime lol bwhah");
});
// Start listening on the specified port
server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});