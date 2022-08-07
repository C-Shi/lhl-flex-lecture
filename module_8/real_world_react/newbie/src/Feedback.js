import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Feedback(props) {
  const [feedback, setFeedback] = useState('')

  const textarea = useRef(null);

  useEffect(() => {
    textarea.current.focus()
    console.log(textarea.current)
  }, [])
  
  useEffect(() => {
    setFeedback(props.user ? `Hi, my name is ${props.user}.` : '')
  }, [props.user])

  const navigate = useNavigate();

  const sendFeecback = (e) => {
    e.preventDefault()
    console.log(textarea.current.value)
    // console.log(feedback)
    navigate("/")
  }

  return (
    <form style={{width: '60%', margin: '0 auto'}} onSubmit={sendFeecback}>
      <div className="form-group">
        <label>Feedback</label>
        <textarea ref={textarea} className="form-control" rows="3" value={feedback} onInput={(e) => setFeedback(e.target.value)}></textarea>
      </div>
      <button type="submit" className="btn btn-default">Send Feedback</button>
    </form>
  )
}