const fs = require("fs");

// Possible with ES8

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

async function main() {
  await appendFile("toto.txt", "coucou\n");
  await appendFile("toto.txt", "coucou\n");
  await appendFile("toto.txt", "coucou\n");
  await appendFile("toto.txt", "coucou\n");
}

main();
