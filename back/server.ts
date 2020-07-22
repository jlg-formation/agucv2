import express from "express";
import serveIndex from "serve-index";
import cors from "cors";

const app = express();
app.use(cors());

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.use(express.static("."));
app.use(serveIndex(".", { icons: true }));

app.listen(3000, () => console.log("Server started on port 3000"));
