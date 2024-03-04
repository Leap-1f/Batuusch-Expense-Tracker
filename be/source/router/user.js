import { Router } from "express";
import { getAllusers } from "../controller/users";
const user = Router();
user.route("/").get(getAllusers);
export { user };
