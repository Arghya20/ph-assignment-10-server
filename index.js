const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.port || 5000;

app.get("/", (req, res) => {
  res.send("now server is running");
});

app.get("/name", (req, res) => {
  res.send("Arghya Ghosh ");
});

app.listen(port, () => {
  console.log("server is running on", port);
});
