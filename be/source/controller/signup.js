import { sql } from "../../config/dataBase.js";
import bcrypt from "bcrypt";
export const signUpUser = async (req, res) => {
  const inputData = req.body;
  const { name, email, password } = inputData;
  console.log(inputData);
  const salt = bcrypt.genSaltSync(1);
  const hash = bcrypt.hashSync(password, salt);
  const data =
    await sql`INSERT INTO users(name , email , password) VALUES(${name} , ${email} , ${hash} ) RETURNING *`;
  res.send(data);
};
