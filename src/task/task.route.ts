import {Router} from "express";
import {createTask, getTask, deleteTask, updateTask, listTask} from "./task.controller";

const router = Router();

router.get('/tasks', listTask);
router.get('/tasks/:id', getTask);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

export { router as taskRouter }