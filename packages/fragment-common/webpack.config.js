var webpack = require("webpack");

module.exports = {
  entry: "./common.js",
  mode: "production",
  output: {
    path: __dirname + "/public",
    publicPath: "http://localhost:8080/public/",
    filename: "bundle.js",
    libraryTarget: "umd",
  },
};
