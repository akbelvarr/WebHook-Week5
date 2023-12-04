const express = require("express");
const app = express();
const port = 5173;
var bodyParser = require("body-parser");
var cors = require("cors");

var jsonParser = bodyParser.json();
var urlencodeParser = bodyParser.urlencoded({ extended: false });

app.use(cors());
app.use(jsonParser);
app.use(urlencodeParser);

app.get("/", (req, res) => {
  res.json("Website A");
});

app.post("/event", (req, res) => {
  if (req.body.secret !== "123") {
    return res.status(403).json({ error: "Invalid secret" });
  }

  console.log("Incoming Webhook");
  res.json("");
});

app.listen(port, () => {
  console.log(`Example app listening at on port ${port}`);
});