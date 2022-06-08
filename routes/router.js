const express = require("express");
const route = express.Router();


route.get("/", (req, res) => {
  res.render("index")
})

route.get("/users", (req, res) => {
  res.render("users")
})

route.get("/:id", (req, res) => {
  res.render("id")
})

module.exports = route