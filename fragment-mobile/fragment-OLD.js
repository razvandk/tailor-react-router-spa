const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;
  const jsHeader = { "Content-Type": "application/javascript" };
  const jsonHeader = { "Content-Type": "application/json" };
  switch (pathname) {
    case "/msisdn/:id":
      res.writeHead(200, jsonHeader);
      const id = req.params.id;
      res.end(JSON.stringify({ msisdn: "50 50 50 50" }, null, 2));

    case "/public/bundle.js":
      res.writeHead(200, jsHeader);
      return fs.createReadStream("./public/bundle.js").pipe(res);

    default:
      res.writeHead(200, {
        "Content-Type": "text/html",
        Link: '<http://localhost:5017/public/bundle.js>; rel="fragment-script"',
      });
      return res.end("");
  }
});

server.listen(5017, () => {
  console.log("SPA Fragment Server started at 5017");
});
