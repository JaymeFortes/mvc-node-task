import Task from '../models/Task.js';

export default class TaskController {
  static createTask(req, res) {
    res.render('tasks/create');
  }

  static async createTaskSave(req, res) {
    const tasks = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    };

    await Task.create(tasks)
      .then(res.redirect('/tasks'))
      .catch((err) => console.log());
  }

  static async deleteTask(req, res) {
    const id = req.body.id;

    await Task.destroy({ where: { id: id } })
      .then(res.redirect('/tasks'))
      .catch((err) => console.log(err));
  }

  static async updateTask(req, res) {
    const id = req.params.id;

    const tasks = await Task.findOne({ where: { id: id }, raw: true });
    res.render('tasks/edit', { task: tasks });
  }

  static async updateTaskSave(req, res) {
    const id = req.body.id;

    const tasks = {
      title: req.body.title,
      description: req.body.description,
    };

    try {
      await Task.update(tasks, { where: { id: id } });
      res.redirect('/tasks');
    } catch (error) {
      console.log('Error updating task:', error);
      res.redirect('/tasks');
    }
  }

  static async showTasks(req, res) {
    const tasks = await Task.findAll({ raw: true });

    res.render('tasks/all', { tasks });
  }
}
