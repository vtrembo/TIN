const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = 7777;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, './', 'form.html'));
});

app.post("/formdata", (req, res) => {
  res.send({
    FirstName: req.body.fname,
    LastName: req.body.lname,
    Age: req.body.age,
  });
});

app.post("/jsondata", (req, res) => {
  res.send(
    `Data taken from json: 
    \n FirstName: ${req.body.fname}  
    \n LastName: ${req.body.lname} 
    \n Age: ${req.body.age}`
  );
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
