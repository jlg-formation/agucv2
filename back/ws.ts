import express from "express";
import cors from "cors";
import { promises as fs } from "fs";
import { BehaviorSubject, timer, of } from "rxjs";
import { switchMap, map, delay, debounce } from "rxjs/operators";

import { Article } from "../front/src/app/interfaces/article";
const app = express.Router();
export const ws = app;

const filename = "data.json";

const articles$ = new BehaviorSubject<Article[]>([]);
async function init() {
  const str = await fs.readFile(filename, { encoding: "utf-8" });
  articles$.next(JSON.parse(str));
}

init();

// ecrire dans le fichier que apres 2 secondes d'inactivite.
articles$
  // .pipe(switchMap((articles) => of(articles).pipe(delay(2000))))
  .pipe(debounce(() => timer(2000)))
  .subscribe((articles) => {
    fs.writeFile(filename, JSON.stringify(articles, undefined, 2));
  });

app.use(cors());

app.get("/articles", (req, res) => {
  res.json(articles$.value);
});

app.use(express.json());

app.post("/articles", (req, res) => {
  const article = req.body;
  article.id =
    "a" + (1 + Math.max(0, ...articles$.value.map((a) => +a.id.substring(1))));
  articles$.next([...articles$.value, article]);
  res.status(201).json(article);
});

app.delete("/articles", (req, res) => {
  const ids = req.body as string[];
  console.log("ids: ", ids);
  articles$.next(articles$.value.filter((a) => !ids.includes(a.id)));
  res.status(204).end();
});
