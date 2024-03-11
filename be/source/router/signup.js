import { Router } from "express";
import { signUpUser } from "../controller/signup.js";
import { getAllusers } from "../controller/user.js";
const signUp = Router();
signUp.route("/").get(getAllusers).post(signUpUser);
export { signUp };
