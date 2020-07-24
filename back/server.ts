import express from "express";
import serveIndex from "serve-index";
import path from "path";

import { ws } from "./ws";

const app = express();
const www = "../front/dist/front";

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.use("/ws", ws);

app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, "../front/dist/front/index.html"));
});

app.listen(3000, () => console.log("Server started on port 3000"));
