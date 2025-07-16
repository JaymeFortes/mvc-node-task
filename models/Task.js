import { Sequelize, DataTypes } from 'sequelize';
import db from '../db/conn.js';

const Task = db.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  done: {
    type: DataTypes.BOOLEAN,
  },
});

export default Task;
