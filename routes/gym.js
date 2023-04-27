import { Router } from "express";
import { getAllGymTasks, createGymTask, getGymTask, deleteGymTask } from "../controllers/gymController.js";

const router = Router();


router.get('/', getAllGymTasks);

router.post('/', createGymTask);

router.get('/:id', getGymTask);

router.delete('/:id', deleteGymTask);


export default router;