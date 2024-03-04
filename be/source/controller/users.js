import { sql } from "./config/dataBase.js";

export const getAllusers = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM users`;
    console.log(data);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
