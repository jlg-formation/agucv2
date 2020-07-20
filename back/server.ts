import express from "express";
import serveIndex from "serve-index";

const app = express();

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.use(express.static("."));
app.use(serveIndex(".", { icons: true }));

app.listen(3000, () => console.log("Server started on port 3000"));
