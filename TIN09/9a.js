const express = require("express");
const app = express();
const body_parser = require("body-parser");
const cors = require("cors");
const port = 7777;

app.use(cors());

app.use(body_parser.urlencoded({
  extended: true
}));

app.use(body_parser.json());

app.post("/calc", (req, res) => {
    const n1 = parseInt(req.body.a);
    const n2 = parseInt(req.body.b);
    const op = req.body.op;
    let result;

    if (isNaN(n1) || isNaN(n2)) {
        result = null;
        res.statusCode = 400;
        res.statusMessage = "Invalid parameters";
        res.send({result});
        return;
    }

    res.status(200);
    switch (op) {
        case "*":
            result = n1 * n2;
            break;
        case "/":
            if (n2 == 0) {
                res.statusCode = 400;
                res.statusMessage = "Cannot devide by 0";
                result = null;
            }
            else {
                result = n1 / n2;
            }
            break;
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        default:
            res.statusCode = 404;
            res.statusMessage = "Valid operational codes: +, -, *, /."
            result = null;
    }
    res.send({result});
});

app.listen(port, () => console.log(`Listening on port: ${port}`));