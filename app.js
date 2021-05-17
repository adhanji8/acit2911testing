const express = require("express");

const app = express();
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello CIT!</h1>");
});

module.exports.app = app;
