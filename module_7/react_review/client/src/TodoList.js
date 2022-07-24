import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoListItem from './TodoListItem';
import NewTodoItem from './NewTodoItem';
export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTasks()
  }, [])

  const getTasks = () => {
    axios.get('http://localhost:3001/api/todos')
    .then(response => {
      setTodos(response.data)
    })
  }

  const deleteTask = (id) => {
    axios.delete(`http://localhost:3001/api/todos/${id}`)
      .then(response => {
        setTodos(todos => {
          return todos.filter(todo => todo.id != id);
        })
      })
  }

  const updateTask = (id, body) => {
    axios.put(`http://localhost:3001/api/todos/${id}`, body)
      .then(response => {
        setTodos(todos => {
          return todos.map(todo => {
            if (todo.id == id) {
              return {...todo, ...body}
            }
            return todo
          })
        })
      })
  }

  const addTask = (task) => {
    setTodos(todos => {
      return [...todos, task]
    })
  }

  const todoList = todos.map(todo => {
    return (
      <TodoListItem {...todo} key={todo.id} handleDelete={deleteTask} handleUpdate={updateTask}/>
    )
  })
  return (
    <>
      <ul>
        {todoList}
      </ul>
      <NewTodoItem handleAdd={addTask} />
    </>
  )
}