import { useState } from 'react';
import Title from './Title'

export default function Counter() {
    // state -> a piece of data that owned by counter component
    const [count, setCount] = useState(100)
    // count -> getter to access that value
    // setCount -> setter function to update that value
  
    // click -> onClick, submit -> onSubmit
  
    const style = {
      border: '1px solid black',
      padding: '50px',
      width: '100px',
      textAlign: 'center',
      fontSize: '32px'
    }
  
    const title = `React Demo at ${count}`;
  
    return (
      <div className="counter">
        <Title>{title}</Title>
        <div style={style}>{count}</div>
        <button onClick={ () => { setCount(count + 1) } }>Add</button>
      </div>
    )
  }