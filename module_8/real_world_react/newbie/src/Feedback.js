import { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Feedback(props) {
  const onFormEvent = (state, event) => {
    return {...state, [event.target.name]: event.target.value }
  }

  let navigate = useNavigate()

  const [feedback, dispatch] = useReducer(onFormEvent, {
    name: '',
    email: '',
    comment: '',
    rate: '1',
  })

  const onSubmit = (event) => {
    event.preventDefault()
    alert('Form Submit')
    navigate('/')
  }

  return (
    <form style={{width: '60%', margin: '0 auto'}} onSubmit={onSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input className="form-control" name="name" value={feedback.name} onChange={dispatch}></input>
        
        <label>Email</label>
        <input className="form-control" name="email" value={feedback.email} onChange={dispatch}></input>

        <label>Feedback</label>
        <textarea className="form-control" rows="3" name="comment" value={feedback.comment} onChange={dispatch}></textarea>

        <label>Rate</label>
        <select className="form-control" name="rate" value={feedback.star} onChange={dispatch}>
          <option type="number">1</option>
          <option type="number">2</option>
          <option type="number">3</option>
          <option type="number">4</option>
          <option type="number">5</option>
        </select>
      </div>
      <button type="submit" className="btn btn-default">Send Feedback</button>
    </form>
  )
}