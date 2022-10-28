const express = require("express");
const app = express();
const port = process.env.port || 5000;
const cors = require("cors");
app.use(cors());

const getData = require("./data/data.json");

app.get("/", (req, res) => {
  res.send("now server is running");
});

app.get("/name", (req, res) => {
  res.send("Arghya Ghosh ");
});

app.get("/data", (req, res) => {
  res.send(getData);
});
app.get("/coursedetails/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = getData.find((d) => d.id == id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log("server is running on", port);
});
