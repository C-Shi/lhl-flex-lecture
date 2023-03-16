import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Feedback(props) {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    comment: '',
    rate: 0,
  })

  let navigate = useNavigate()


  return (
    <form style={{width: '60%', margin: '0 auto'}}>
      <div className="form-group">
        <label>Name</label>
        <input className="form-control" value={feedback.name} onChange={e => { setFeedback({...feedback, name: e.target.value})}}></input>
        
        <label>Email</label>
        <input className="form-control" value={feedback.email} onChange={e => { setFeedback({...feedback, email: e.target.value})}}></input>

        <label>Feedback</label>
        <textarea className="form-control" rows="3" value={feedback.comment} onChange={e => { setFeedback({...feedback, comment: e.target.value})}}></textarea>

        <label>Rate</label>
        <select className="form-control" value={feedback.star} onChange={e => { setFeedback({...feedback, rate: e.target.value})}}>
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