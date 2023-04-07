import express from "express";
import { getData, postData } from "../Controller/controller.js";

const Router = express.Router();

Router.get("/getData", getData);
Router.post("/postData", postData);

export default Router;