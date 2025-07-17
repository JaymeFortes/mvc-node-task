import express from 'express';
const router = express.Router();
import TaskController from '../controlls/TaskController.js';

router.get('/add', TaskController.createTask);
router.post('/add', TaskController.createTaskSave);
router.post('/delete', TaskController.deleteTask);
router.get('/edit/:id', TaskController.updateTask);
router.post('/edit', TaskController.updateTaskSave);
router.post('/updatestatus', TaskController.toggleTaskStatus);
router.get('/', TaskController.showTasks);

export default router;
