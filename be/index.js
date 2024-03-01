import express, { request, response } from "express";
import cors from "cors";
import fs from "fs";
const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());
var dataJson = JSON.parse(fs.readFileSync("data.json"));
app.get("/", (request, response) => {
  response.status(200).send(dataJson);
});
app.post("/", (request, response) => {
  var newData = request.body;
  dataJson.push(newData);
    fs.writeFileSync("data.json", JSON.stringify(dataJson));
});
app.delete("/:id", (request, response) => {});
app.listen(port, () => {
  console.log(`http://localhost:${8080}/`);
});
