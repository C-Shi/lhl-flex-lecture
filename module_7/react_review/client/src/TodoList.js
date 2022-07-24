import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoListItem from './TodoListItem';
import NewTodoItem from './NewTodoItem';
export default function TodoList() {
  const [todos, setTodos] = useState([]);


  const todoList = todos.map(todo => {
    return (
      <li key={todo.id}>
        <span>{todo.task}</span>
        <button>Delete</button>
      </li>
    )
  })
  return (
    <>
      <ul>
        {todoList}
      </ul>
    </>
  )
}