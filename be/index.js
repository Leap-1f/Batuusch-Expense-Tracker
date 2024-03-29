import express, { request, response } from "express";
import cors from "cors";
import { user } from "./source/router/user.js";
import { signUp } from "./source/router/signup.js";
import { sql } from "./config/dataBase.js";
import bcrypt from "bcrypt";
const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", user);
app.use("/users/signup", signUp);
app.post("/users/login", async (request, response) => {
  const { email, password } = request.body;
  const data = await sql`SELECT * FROM  users WHERE email=${email} `;
  if (data.length !== 0) {
    var unHashedPassword = await bcrypt.compare(password, data[0].password);
  }
  if (data.length !== 0 && unHashedPassword === true) {
    console.log(data[0]);
    return response.status(200).send(JSON.stringify(data[0].id));
  } else {
    response.status(400).send({ message: "Wrong Email or Password" });
  }
});
app.post("/users/currency", async (request, response) => {
  const { currency } = await request.body;
  const data = await sql`UPDATE users
  SET currency_type = ${currency}
  WHERE createdat IN (SELECT max(createdat) FROM users);`;
  response.status(201).send(data);
});
app.post("/users/balance", async (request, response) => {
  const { balance } = await request.body;
  const data = await sql`UPDATE users
  SET balance = ${balance}
  WHERE createdat IN (SELECT max(createdat) FROM users);`;
  response.status(201).send(data);
});
app.listen(port, () => {
  console.log(`http://localhost:${8080}/`);
});
