export default function props(props) {
  return (
    <div key={props.model}>
      <h5>Model: {props.model}</h5>
      <p>Make: {props.make}</p>
      <p>Price: ${props.price}</p>
    </div>
  )
}