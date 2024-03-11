import { Router } from "express";
import { getAllusers } from "../controller/user.js";
const user = Router();
user.route("/").get(getAllusers);
export { user };
