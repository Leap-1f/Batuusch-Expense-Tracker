import express, { request, response } from "express";
import cors from "cors";
import fs from "fs";
const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());
const array =[1,2,3]
app.get("/", (request, response) => {
  response.status(200).send(array);
});
app.post("/", (request, response) => {

});
app.delete("/:id", (request, response) => {
 
});
app.listen(port, () => {
  console.log(`http://localhost:${8080}/`);
});