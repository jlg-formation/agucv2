import express from "express";
import { Article } from "../front/src/app/interfaces/article";
const app = express.Router();
export const ws = app;

const articles: Article[] = [
  { name: "Tournevis", price: 6.99, qty: 100 },
  { name: "Tournevis cruciforme", price: 3.99, qty: 12 },
  { name: "Pince", price: 2, qty: 10 },
  { name: "Scie", price: 3.99, qty: 120 },
];

app.get("/articles", (req, res) => {
  res.json(articles);
});
