export default function CarListItem({id, model, make, price, status, onStatusChange}) {
  const style = {
    border: '1px solid black',
    width: '300px',
    margin: '20px'
  }
  return (
    <li key={id} style={style}>
      <h5>Model: {model}</h5>
      <p>Make: {make}</p>
      <p>Price: ${price}</p>
      <p>Status: {status}</p>
      <button onClick={() => { onStatusChange(id, 'SOLD') }}>Mark As Sold</button>
    </li>
  )
}