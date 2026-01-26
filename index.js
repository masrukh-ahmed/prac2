const express = require("express");
const app = express();
let port = 3000;
const path = require("path");

app.set("view engine", "ejs"); //setting view engine as ejs
app.use(express.static("public")); //middleware for public file
app.set("views", path.join(__dirname, "views"));

app.get("/pricing", (req, res) => {
  res.render("pricing");
});

app.listen(port, () => {
  //for server startup
  console.log(`Listening on port ${port}.`);
});
