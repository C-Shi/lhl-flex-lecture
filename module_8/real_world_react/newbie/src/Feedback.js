import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Feedback(props) {
  const [feedback, setFeedback] = useState('')
  const textarea = useRef(null);

  useEffect(() => {
    textarea.current.focus()
  }, [])

  let navigate = useNavigate()

  useEffect(() => {
    setFeedback(props.user ? `Hi, my name is ${props.user}.` : '')
  }, [props.user])

  const sendFeecback = (e) => {
    e.preventDefault()
    console.log(textarea.current.value)

    // redirect to a different route after form is sent out
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