export default function TodoListItem(props) {
  return (
    <li>
      <span style={props.completed ? { textDecoration: 'line-through'} : {}} onClick={() => props.handleUpdate(props.id, { completed: !props.completed})}>{props.task}</span>
      <button onClick={() => props.handleDelete(props.id)}>Delete</button>
    </li>
  )
}