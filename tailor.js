"use strict";

require("dotenv").config();

const http = require("http");
const Tailor = require("node-tailor");

const requestFragment = require("node-tailor/lib/request-fragment");
const filterReqHeadersFn = require("node-tailor/lib/filter-headers");

const tailor = new Tailor({
  templatesPath: __dirname + "/templates",
  requestFragment: (fragmentUrl, fragmentAttributes, request, span) =>
    requestFragment(filterReqHeadersFn)(
      process.env[fragmentUrl] || fragmentUrl,
      fragmentAttributes,
      request,
      span
    ),
});

http
  .createServer((req, res) => {
    if (req.url === "/favicon.ico") {
      res.writeHead(200, { "Content-Type": "image/x-icon" });
      return res.end("");
    }

    req.headers["x-request-uri"] = req.url;
    req.url = "/index";

    tailor.requestHandler(req, res);
  })
  .listen(8080, function () {
    console.log("Tailor server listening on port 8080");
  });
