const express = require("express");
var cors = require("cors");
const path = require("path");
const fragmentServer = express();

const HOST = process.env.HOST;
const PORT = process.env.PORT;

fragmentServer.use(cors());

fragmentServer.get("/msisdn/:id", function (req, res) {
  const id = req.params.id;
  const msisdn = parseInt(id) === 123456 ? "40 40 40 40" : "50 50 50 50";
  const subscriptionPlan =
    parseInt(id) === 123456 ? "Fri Tale + 60GB Data" : "Fri Tale + Fri Data";

  const data = { msisdn, subscriptionPlan };
  console.log("Get MSISDN " + JSON.stringify(data));
  res.json(data);
});

fragmentServer.get("/public/bundle.js", function (req, res) {
  res.append("Content-Type", "application/javascript");
  res.sendFile(path.join(__dirname, "public/bundle.js"));
});

fragmentServer.get("*", function (req, res) {
  res.append("Content-Type", "text/html");
  res.links({
    "fragment-script": `${HOST}/fragment-mobile/public/bundle.js`,
  });
  res.end();
});

fragmentServer.listen(PORT, () => {
  console.log(`Mobile Fragment Server started at port ${PORT}!`);
});
