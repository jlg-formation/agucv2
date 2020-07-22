import express from "express";
import cors from "cors";

import { Article } from "../front/src/app/interfaces/article";
const app = express.Router();
export const ws = app;

const articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 6.99, qty: 100 },
  { id: "a2", name: "Tournevis cruciforme", price: 3.99, qty: 12 },
  { id: "a3", name: "Pince", price: 2, qty: 10 },
  { id: "a6", name: "Scie", price: 3.99, qty: 120 },
];

app.use(cors());

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.use(express.json());

app.post("/articles", (req, res) => {
  const article = req.body;
  article.id = "a" + (1 + Math.max(...articles.map((a) => +a.id.substring(1))));
  articles.push(article);
  res.status(201).json(article);
});
