const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("coucou");
});

app.get("/toto", (req, res) => {
  res.send("titi");
});

app.listen(3000, () => console.log("Server started on port 3000"));
