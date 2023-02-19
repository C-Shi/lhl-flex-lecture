export default function CarListItem({id, model, make, price, status, markAsSold}) {
  const style = {
    border: '1px solid black',
    width: '300px',
    margin: '20px'
  }

  return (
    <div key={id}>
      <h5>Model: {model}</h5>
      <p>Make: {make}</p>
      <p>Price: ${price}</p>
      <p>Status: {status}</p>
      {status === 'AVAILABLE' && <button onClick={() => { markAsSold(id) }}>Mark as sold</button>}
    </div>
  )
}