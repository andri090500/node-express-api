const express = require("express");
const heroController = require("./controllers/hero.controller.js");
const userController = require("./controllers/user.controller.js");
const server = express();
const port = 3001;
const bodyParser = require("body-parser");

//body-parser digunakan untuk post data agar bisa diterima oleh server
//not start you can use syntax npm run mulai atau apalah //tambahkan run

server.use(bodyParser.urlencoded({ extended: true }));
server.set("view engine", "ejs");
server.set("views", "views");

server.use(express.static(__dirname));
server.use("/hero", heroController);
server.use("/user", userController);

server.get("/", (req, res) => {
  res.render("landing");
});

server.listen(port, () => console.log("Server is running at port 3001"));
