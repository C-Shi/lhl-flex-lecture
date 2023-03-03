export default function TodoListItem(props) {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <div>
        <input className="form-check-input me-1" 
            type="checkbox" 
            defaultChecked={props.completed}
            onChange={(e)=> { props.handleUpdate(props.id, { completed: e.target.checked} )}}
            />
        <label 
          className="form-check-label" 
          style={props.completed ? { textDecoration: 'line-through'} : {}}
        >{props.task}</label>
      </div>

      <button 
        className="btn btn-danger btn-sm" 
        onClick={() => props.handleDelete(props.id)}
      ><i className="bi bi-trash3"></i></button>
    </li>
  )
}