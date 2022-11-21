const express = require("express");
const app = express();
const logger = require("./middlewares/logger");
const authorize = require("./middlewares/authorize");
//Middlewares:

app.use([logger, authorize]);//order matters

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/about/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server running at port 5000");
});
