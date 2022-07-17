import { useState, useEffect } from 'react';

export default function Timer() {
  const [time1, setTime1] = useState(0)
  const [time2, setTime2] = useState(100)
  const [time3, setTime3] = useState(0)


  useEffect(() => {
    const i = setInterval(() => {
      console.log('running interval')
      setTime3(time3 + 1)
    }, 1000);

    return () => clearInterval(i)
  }, [time3])


  return (
    <>
      <h2>Timer1</h2>
      <h1 id="timer1">{time1}</h1>
      <button onClick={() => setTime1(time1 + 1)}>Add One</button>

      <h2>Timer2</h2>
      <h1 id="timer2">{time2}</h1>
      <button onClick={() => setTime2(time2 - 1)}>Minus One</button>

      <h2>Timer3</h2>
      <h1 id="timer3">{time3}</h1>
      <button onClick={() => setTime3(50)}>Set to 50</button>
    </>
  )
}