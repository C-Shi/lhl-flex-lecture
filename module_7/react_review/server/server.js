const express = require('express');
const app = express();

let todos = [
  {id: 1, task: 'go shopping', completed: false},
  {id: 2, task: 'read books', completed: false},
  {id: 3, task: 'apply for school', completed: false}
]

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  return next()
})

app.use(express.json())

app.get('/api/todos', (req, res) => {
  res.json(todos);
})

app.post('/api/todos', (req, res) => {
  console.log(req.body)
  const { task, completed } = req.body;
  const id = todos[todos.length - 1 ].id + 1;
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