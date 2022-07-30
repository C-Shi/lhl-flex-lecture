import { findIcon  } from "./helper/helper";

export default function Computer(props) {
  return (
    <div className='computer'>
      <h2>Computer</h2>
      {
        props.status === 'Waiting' ? 
        <div className="result">?</div> :       
        <div className="result">
          {findIcon(props.choice)}
          {props.choice}
        </div>
      }
    </div>
  )
}