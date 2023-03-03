import axios from 'axios';
import { useState } from 'react';

export default function NewTodoItem(props) {
  const [todo, setTodo] = useState({
    task: "",
    completed: false
  })

  const handleInput = (e) => {
    setTodo({ ...todo, task: e.target.value })
  }

  const handleChange = (e) => {
    setTodo({ ...todo, completed: e.target.checked })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/api/todos', todo)
      .then(response => {
        props.handleAdd(response.data)
        setTodo({ task: "", completed: false })
      })
  }

  return (
    <div className="card">
      <h5 class="card-header">Add New Task</h5>
      <div class="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" 
              className="form-control" 
              onInput={handleInput} 
              value={todo.task} 
              placeholder="Add a task" 
              />
            <div className="form-text">A good day start with planning</div>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" onChange={handleChange} className="form-check-input" checked={todo.completed} />
            <label className="form-check-label">Is Completed?</label>
          </div>
          <button className="btn btn-sm btn-primary" disabled={!todo.task}>Add Task</button>
        </form>
      </div>
    </div>
  )
}