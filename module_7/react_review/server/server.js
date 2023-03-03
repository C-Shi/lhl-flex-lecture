const express = require('express');
const todoGen = require('fake-todos');
const { v4: uuidv4 } = require('uuid');
const app = express();

let todos = todoGen(7).map(todo => {
  return {id: todo.id, completed: todo.done, task: todo.what}
})

app.use(express.json())

// set CORS to allow external application access our routes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  return next()
})

app.get('/api/todos', (req, res) => {
  res.json(todos);
})

app.post('/api/todos', (req, res) => {
  const { task, completed } = req.body;
  const id = uuidv4();
  const data = {id, task, completed}
  todos.push(data);
  return res.json(data)
})

app.put('/api/todos/:id', (req, res) => {
  todos = todos.map(todo => {
    if (todo.id == req.params.id) {
      return {...todo, ...req.body}
    }
    return todo
  })
  return res.json(todos.find(todo => todo.id == req.params.id))
})

app.delete('/api/todos/:id', (req, res) => {
  todos = todos.filter(todo => todo.id != req.params.id)
  return res.status(204).send()
})

app.listen(3001, () => {
  console.log('server start at 3001')
})