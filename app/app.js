const express = require("express");
const morgan = require("morgan");
const path = require("path");
const dotenv = require("dotenv");
const favicon = require("serve-favicon");

dotenv.config();
const app = express();
const port = process.env.PORT || 2000;
app.set("port", port);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(favicon(path.join("public", "/img/favicon.ico")));

const task = require("./routes/task.routes");
app.use(task);

app.get("/", (req, res) => {
  res.render("index");
});

module.exports = app;
