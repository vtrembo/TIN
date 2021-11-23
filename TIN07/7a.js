const http = require("http");
const url = require("url");
const port = "7777";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Working");
    res.end();
  }

  if (req.url.startsWith("/add")) {
    const queryObject = url.parse(req.url, true).query;
    const n1 = parseInt(queryObject.n1);
    const n2 = parseInt(queryObject.n2);

    if (n1 && n2) {
      var result = String(n1 + n2);
      res.write(n1 + " + " + n2 + " = " + result);
      res.end();
    } else {
        res.write("Incorrect values.");
      res.end();
    }
  }

  if (req.url.startsWith("/sub")) {
    var queryObject = url.parse(req.url, true).query;
    const n1 = parseInt(queryObject.n1);
    const n2 = parseInt(queryObject.n2);
    if (n1 && n2) {
      var result = String(n1 - n2);
      res.write(n1 + " - " + n2 + " = " + result);
      res.end();
    } else {
        res.write("Incorrect values.");
      res.end();
    }
  }

  if (req.url.startsWith("/mul")) {
    var queryObject = url.parse(req.url, true).query;
    const n1 = parseInt(queryObject.n1);
    const n2 = parseInt(queryObject.n2);
    if (n1 && n2) {

      var result = String(n1 * n2);
      res.write(n1 + " * " + n2 + " = " + result);
      res.end();
    } else {
        res.write("Incorrect values.");
      res.end();
    }
  }
  
  if (req.url.startsWith("/div")) {
    var queryObject = url.parse(req.url, true).query;
    const n1 = parseInt(queryObject.n1);
    const n2 = parseInt(queryObject.n2);
    if (n1 && n2) {
        if (n2 == 0) {
            res.write("Cannot devide by 0");
            res.end();
        }
      var result = String(n1 / n2);
      res.write(n1 + " / " + n2 + " = " + result);
      res.end();
    } else {
      res.write("Incorrect values.");
      res.end();
    }
  }
});

server.listen(port);