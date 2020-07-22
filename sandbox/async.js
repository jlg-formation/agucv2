const fs = require("fs");

fs.appendFile("toto.txt", "coucou\n", () => {
  fs.appendFile("toto.txt", "coucou\n", () => {
    fs.appendFile("toto.txt", "coucou\n", () => {
      fs.appendFile("toto.txt", "coucou\n", () => {});
    });
  });
});
