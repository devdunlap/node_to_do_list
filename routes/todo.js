import { Router } from "express";
import { getAllTodoTasks, createTodoTask, getTodoTask, deleteTodoTask } from "../controllers/todoController.js";

const router = Router();


router.get('/', getAllTodoTasks);

router.post('/', createTodoTask);

router.get('/:id', getTodoTask);

router.delete('/:id', deleteTodoTask);


export default router;