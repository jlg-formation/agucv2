const fs = require("fs").promises;
const { from } = require("rxjs");
const { switchMap } = require("rxjs/operators");

from(fs.appendFile("toto.txt", "coucou1\n"))
  .pipe(
    switchMap(() => from(fs.appendFile("toto.txt", "coucou2\n"))),
    switchMap(() => from(fs.appendFile("toto.txt", "coucou3\n"))),
    switchMap(() => from(fs.appendFile("toto.txt", "coucou4\n")))
  )
  .subscribe();
