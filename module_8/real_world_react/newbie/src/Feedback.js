import { useState, useEffect } from 'react';
export default function Feedback(props) {
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    setFeedback(props.user ? `Hi, my name is ${props.user}.` : '')
  }, [props.user])

  return (
    <form style={{width: '60%', margin: '0 auto'}}>
      <div className="form-group">
        <label>Feedback</label>
        <textarea className="form-control" rows="3" value={feedback} onInput={(e) => setFeedback(e.target.value)}></textarea>
      </div>
      <button type="submit" className="btn btn-default">Send Feedback</button>
    </form>
  )
}