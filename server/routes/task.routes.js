import { Router } from "express";
import { getTasks, getTask, updateTask, deleteTask, createTask } from "../controlers/task.controller.js";
const router = Router();

router.get("/tasks", getTasks)

router.get("/task/:id", getTask)

router.post("/tasks", createTask)

router.put("/tasks/:id", updateTask)

router.delete("/tasks/:id", deleteTask)


export default router;
