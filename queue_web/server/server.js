const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

var cors = require("cors");
app.use(cors());
app.use("/", router);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var queue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var waitlist = [];
var status = [false, false, false, false];
var ticket = [-1, -1, -1, -1];

router.get("/take", (req, res) => {
  if (queue.length > 0) waitlist.push(queue.shift(0));
  res.json({ waitlist });
});

router.get("/waitList", (req, res) => {
  res.json({ waitlist });
});

app.post("/api", (req, res) => {
  res.send("POST request to the homepage");
});

app.post("/status", (req, res) => {
  status[req.body.number] = !status[req.body.number];
  console.log(status);
});

app.get("/status", (req, res) => {
  res.json({ status });
});

app.get("/ticket", (req, res) => {
  res.json({ ticket });
});

app.post("/ticket", (req, res) => {
  if (
    waitlist.length > 0 &&
    ticket[req.body.number] < 0 &&
    status[req.body.number] == true
  ) {
    ticket[req.body.number] = waitlist.shift(0);
  } else {
    res.send("No request in the waiting queue");
  }
});

app.post("/finish", (req, res) => {
  if (status[req.body.number] == true) {
    queue.push(ticket[req.body.number]);
    ticket[req.body.number] = -1;
  }
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
