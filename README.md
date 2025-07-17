# 📋 TaskManager - Node.js MVC Task Management Application

Um sistema moderno de gerenciamento de tarefas desenvolvido com Node.js, Express e arquitetura MVC. Interface elegante com glass morphism e funcionalidades completas de CRUD.

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
![Handlebars](https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black)

## ✨ Funcionalidades

- ✅ **Criar Tarefas** - Interface moderna com validação
- 📝 **Editar Tarefas** - Formulários pré-preenchidos elegantes
- ❌ **Deletar Tarefas** - Confirmação de segurança
- ✔️ **Marcar como Concluída** - Toggle visual intuitivo
- 🎨 **Interface Moderna** - Design glass morphism responsivo
- 📊 **Dashboard** - Estatísticas de tarefas
- 🌙 **Animações Suaves** - Transições e hover effects

## 🚀 Demonstração

### 📱 Interface Principal
- Layout responsivo com cards elegantes
- Estados visuais para tarefas completadas
- Botões interativos com feedback visual

### 🎨 Design Moderno
- Glass morphism effects
- Gradientes e animações CSS
- Ícones Bootstrap integrados
- Scrollbar personalizada

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **Sequelize** - ORM para banco de dados
- **MySQL** - Sistema de gerenciamento de banco de dados
- **dotenv** - Gerenciamento de variáveis de ambiente

### Frontend
- **Handlebars** - Template engine
- **CSS3** - Estilização moderna com glass morphism
- **Bootstrap Icons** - Ícones vetoriais
- **JavaScript** - Interatividade no frontend

### Ferramentas de Desenvolvimento
- **Nodemon** - Hot reload para desenvolvimento
- **ES6 Modules** - Sistema de módulos moderno

## 📁 Estrutura do Projeto

```
mvc-node/
├── 📁 controlls/          # Controllers MVC
│   └── TaskController.js  # Lógica de negócio das tarefas
├── 📁 db/                 # Configuração do banco de dados
│   └── conn.js           # Conexão Sequelize
├── 📁 models/            # Modelos de dados
│   └── Task.js           # Modelo da tarefa
├── 📁 public/            # Arquivos estáticos
│   └── 📁 css/
│       └── styles.css    # Estilos modernos
├── 📁 router/            # Rotas da aplicação
│   └── taskRouter.js     # Rotas das tarefas
├── 📁 views/             # Templates Handlebars
│   ├── 📁 layouts/
│   │   └── main.handlebars  # Layout principal
│   └── 📁 tasks/
│       ├── all.handlebars     # Lista de tarefas
│       ├── create.handlebars  # Criar tarefa
│       └── edit.handlebars    # Editar tarefa
├── .env                  # Variáveis de ambiente
├── index.js             # Ponto de entrada da aplicação
└── package.json         # Dependências e scripts
```

## ⚡ Instalação e Configuração

### Pré-requisitos
- Node.js (v14 ou superior)
- MySQL (v8.0 ou superior)
- npm ou yarn

### 1. Clone o repositório
```bash
git clone https://github.com/JaymeFortes/mvc-node-task.git
cd mvc-node-task
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o banco de dados
Crie um arquivo `.env` na raiz do projeto:

```env
DB_NAME=taskmanager
DB_USER=root
DB_PASS=sua_senha
DB_HOST=localhost
DB_PORT=3306
```

### 4. Configure o MySQL
```sql
CREATE DATABASE taskmanager;
```

### 5. Execute a aplicação
```bash
npm start
```

A aplicação estará disponível em: `http://localhost:3000`

## 📊 Modelo de Dados

### Task (Tarefa)
```javascript
{
  id: INTEGER (Primary Key, Auto Increment),
  title: STRING (Required) - Título da tarefa,
  description: STRING (Optional) - Descrição detalhada,
  done: BOOLEAN (Default: false) - Status de conclusão,
  createdAt: DATE - Data de criação,
  updatedAt: DATE - Data da última atualização
}
```

## 🛣️ Rotas da API

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/tasks` | Lista todas as tarefas |
| `GET` | `/tasks/add` | Formulário de criação |
| `POST` | `/tasks/add` | Criar nova tarefa |
| `GET` | `/tasks/edit/:id` | Formulário de edição |
| `POST` | `/tasks/edit` | Atualizar tarefa |
| `POST` | `/tasks/delete` | Deletar tarefa |
| `POST` | `/tasks/updatestatus` | Alternar status da tarefa |

## 🎨 Recursos Visuais

### Design System
- **Cores Primárias**: Gradientes azul-roxo (`#667eea` → `#764ba2`)
- **Glass Morphism**: Transparência com blur effects
- **Animações**: Cubic-bezier transitions
- **Tipografia**: Inter font family
- **Ícones**: Bootstrap Icons

### Estados Visuais
- **Task Pendente**: Card branco, ícone azul
- **Task Concluída**: Opacidade reduzida, título riscado, ícone verde
- **Hover Effects**: Elevação e sombras dinâmicas
- **Loading States**: Animações de carregamento

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento com hot reload
npm start

# Executar testes (a implementar)
npm test
```

## 🔧 Funcionalidades Técnicas

### Arquitetura MVC
- **Model**: Sequelize ORM com MySQL
- **View**: Handlebars templates com CSS moderno
- **Controller**: Lógica de negócio separada

### Recursos Avançados
- **ES6 Modules**: Import/export moderno
- **Async/Await**: Operações assíncronas
- **Error Handling**: Try/catch e validações
- **Responsive Design**: Mobile-first approach
- **Glass Morphism**: Efeitos visuais modernos

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie sua feature branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Add: nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Jayme Fortes**
- GitHub: [@JaymeFortes](https://github.com/JaymeFortes)

## 🙏 Agradecimentos

- Curso Node.js Udemy
- Comunidade Node.js
- Bootstrap Icons
- Sequelize Team

---

<div align="center">
  <strong>🚀 Desenvolvido com ❤️ usando Node.js</strong>
</div>
