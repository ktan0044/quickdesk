const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

var cors = require("cors");
app.use(cors());
app.use("/", router);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

app.post("/api", (req, res) => {
  console.log(req.user);
  res.send("POST request to the homepage");
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
