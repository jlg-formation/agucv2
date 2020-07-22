const fs = require("fs");

// Possible with ES6

function appendFile(filename, content) {
  return new Promise(function (resolve, reject) {
    fs.appendFile(filename, content, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

appendFile("toto.txt", "coucou\n")
  .then(() => appendFile("toto.txt", "coucou\n"))
  .then(() => appendFile("toto.txt", "coucou\n"))
  .then(() => appendFile("toto.txt", "coucou\n"));
