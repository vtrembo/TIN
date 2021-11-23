const fs = require("fs");

function checkPath(path) {
  var readFile = fs.readdirSync(path);
  console.log("Files: \n" + readFile);
  fs.watch(path, "utf8", function() {
    file = fs.readdirSync(path);
  });
}

checkPath("./testData");