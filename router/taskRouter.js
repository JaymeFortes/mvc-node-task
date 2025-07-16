import express from 'express';
const router = express.Router();
import TaskController from '../controlls/TaskController.js';

router.get('/add', TaskController.createTask);
router.get('/', TaskController.showTasks);

export default router;

