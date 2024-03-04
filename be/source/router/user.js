import { Router } from "express";
import { getAllusers } from "../controller/user";
const user = Router();
user.route("/").get(getAllusers);
export { user };
