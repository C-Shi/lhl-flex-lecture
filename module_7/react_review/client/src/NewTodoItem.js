import axios from 'axios';
import { useState } from 'react';

export default function NewTodoItem(props) {
  const [todo, setTodo] = useState({
    task: "",
    completed: false
  })

  const handleInput = (e) => {
    setTodo({...todo, task: e.target.value})
  }

  const handleChange = (e) => {
    setTodo({...todo, completed: e.target.checked})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/api/todos', todo)
      .then(response => {
        props.handleAdd(response.data)
        setTodo({task: "", completed: false})
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onInput={handleInput} value={todo.task} placeholder="Add a task" />
      <label>Is completed?</label>
      <input type="checkbox" onChange={handleChange} checked={todo.completed}/>
      <button>Add Task</button>
    </form>
  )
}