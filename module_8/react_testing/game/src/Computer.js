import { findIcon  } from "./helper/helper";

export default function Computer(props) {
  return (
    <div className='computer'>
      <h2>Computer</h2>
      {
        props.status === 'Waiting' ? 
        <div className="computer-result">?</div> :       
        <div className="computer-result">
          {findIcon(props.choice)}
          {props.choice}
        </div>
      }
    </div>
  )
}