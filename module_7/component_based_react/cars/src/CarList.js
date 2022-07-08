import { useState } from 'react'

import CarListItem from './CarListItem'

export default function CarList () {
  const [cars, setCars] = useState([
    { id: 1, model: 'F-150', make: 'Ford', price: 5000, status: 'AVAILAVBLE' },
    { id: 2, model: 'Corolla', make: 'Toyota', price: 2000, status: 'AVAILABLE'}
  ])

  const [contact, setContact] = useState('8881234567')

  const onStatusChangeHandler = (id, status) => {
    const newState = cars.map(car => {
      if (id === car.id) {
        return {...car, status}
      }
      return car;
    })
    setCars(newState)
  }

  const carDisplay = cars.map(car => {
    return (
      <ul>
        <CarListItem key={car.id} {...car} onStatusChange={onStatusChangeHandler}/>
      </ul>
    )
  })
  return (
    <>
      {carDisplay}
      <p>Shop contact: {contact}</p>

      <input value={contact} onInput={(e) => setContact(e.target.value)}/>
    </>
  );
}