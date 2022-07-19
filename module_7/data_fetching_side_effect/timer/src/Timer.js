import { useState, useEffect } from 'react';

export default function Timer() {
  const [time1, setTime1] = useState(0)
  const [time2, setTime2] = useState(100)


  return (
    <>
      <h2>Timer1</h2>
      <h1 id="timer1">{time1}</h1>
      <button onClick={() => setTime1(time1 + 1)}>Add One</button>

      <h2>Timer2</h2>
      <h1 id="timer2">{time2}</h1>
      <button onClick={() => setTime2(time2 - 1)}>Minus One</button>
    </>
  )
}