import express, { request, response } from "express";
import { sql } from "./config/dataBase.js";
import cors from "cors";
import fs from "fs";
import { userInfo } from "os";
const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/users" , userInfo)
app.get("/users", async (request, response) => {
  const data = await sql`SELECT * FROM users`;
  console.log(data);
  response.send(data);
});
app.post("/users/createtable", async (request, response) => {
  const data =
    await sql`CREATE TABLE users(id SERIAL PRIMARY KEY , name TEXT NOT NULL , email TEXT NOT NULL)`;
  response.send(data);
});
app.post("/users/addData", async (request, response) => {
  const inputData = request.body;
  const { name, email, password } = inputData;
  console.log(inputData);
  const data =
    await sql`INSERT INTO users(name , email) VALUES(${name} , ${email}) RETURNING *`;
  response.send(data);
});
app.delete("/users/dropTable", async (request, response) => {
  const data = await sql`DROP TABLE users`;
  response.send(data);
});
app.listen(port, () => {
  console.log(`http://localhost:${8080}/`);
});
