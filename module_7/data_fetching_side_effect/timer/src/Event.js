import { useState, useEffect } from 'react'
export default function Event() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mouseEvent = (e) => {
    console.log('Mouse Move');
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
    document.addEventListener('mousemove', mouseEvent)

    return () => {
      document.removeEventListener('mousemove', mouseEvent)
    }
  }, [])

  return (
    <div>
      Mouse X- {x}, Y - {y}
    </div>
  )
}