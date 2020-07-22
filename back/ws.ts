import express from "express";
import cors from "cors";
import { promises as fs } from "fs";

import { Article } from "../front/src/app/interfaces/article";
const app = express.Router();
export const ws = app;

const filename = "data.json";

let articles: Article[] = [];
async function init() {
  const str = await fs.readFile(filename, { encoding: "utf-8" });
  articles = JSON.parse(str);
}

init();

app.use(cors());

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.use(express.json());

app.post("/articles", (req, res) => {
  (async () => {
    const article = req.body;
    article.id =
      "a" + (1 + Math.max(0, ...articles.map((a) => +a.id.substring(1))));
    articles.push(article);
    await fs.writeFile(filename, JSON.stringify(articles, undefined, 2));
    res.status(201).json(article);
  })();
});
