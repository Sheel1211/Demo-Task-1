import { Router } from "express";
import { addStudent, getAllStudents } from "../controllers/studentController.js";

export const studentRoutes = Router();

studentRoutes.route("/getStudents").get(getAllStudents);
studentRoutes.route("/addStudent").post(addStudent);