const express = require("express");
const user = require("./routes/user");

const InitiateMongoServer = require("./config/db");

var multer = require("multer");
var upload = multer();

var morgan = require("morgan");

InitiateMongoServer();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/user", upload.none(), user);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
