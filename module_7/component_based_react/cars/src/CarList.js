import { useState } from 'react'

import CarListItem from './CarListItem'

export default function CarList () {
  const [cars, setCars] = useState([
    { id: 1, model: 'F-150', make: 'Ford', price: 5000, status: 'AVAILAVBLE' },
    { id: 2, model: 'Corolla', make: 'Toyota', price: 2000, status: 'AVAILABLE'}
  ])

  return (
    <>
      <h5>Model: {cars[0].model}</h5>
      <p>Make: {cars[0].make}</p>
      <p>Price: ${cars[0].price}</p>
      <p>Status: {cars[0].status}</p>

      <h5>Model: {cars[1].model}</h5>
      <p>Make: {cars[1].make}</p>
      <p>Price: ${cars[1].price}</p>
      <p>Status: {cars[1].status}</p>

    </>
  );
}