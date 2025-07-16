import express from 'express';
import exphbs from 'express-handlebars';
import conn from './db/conn.js';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import Task from './models/Task.js';

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
app.engine(
  'handlebars',
  exphbs.engine({
    layoutsDir: 'views/layout',
    defaultLayout: 'main',
  })
);
app.set('view engine', 'handlebars');

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

conn
  .sync()
  //.sync({force: true}) //recria o banco
  .then(() => {
    app.listen(PORT);
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
  })
  .catch((err) => console.log(err));
