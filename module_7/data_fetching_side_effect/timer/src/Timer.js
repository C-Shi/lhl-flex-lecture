import { useState, useEffect } from 'react';

export default function Timer() {
  const [time1, setTime1] = useState(0)
  const [time2, setTime2] = useState(100)

  return (
    <>
      <h2>Time1</h2>
      <h1 id="time1">{time1}</h1>
      <button onClick={() => setTime1(time1 + 1)}>Add One</button>

      <h2>Time2</h2>
      <h1 id="time2">{time2}</h1>
      <button onClick={() => setTime2(time2 - 1)}>Minus One</button>
    </>
  )
}