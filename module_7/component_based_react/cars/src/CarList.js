import { useState } from 'react'
import CarListItem from './CarListItem'

export default function CarList () {
  const [cars, setCars] = useState([
    { id: 1, model: 'F-150', make: 'Ford', price: 5000, status: 'AVAILABLE' },
    { id: 2, model: 'Corolla', make: 'Toyota', price: 2000, status: 'AVAILABLE'}
  ])

  const [contact, setContact] = useState('8881234567')

  const markAsSold = (id) => {
    const updateCars = cars.map(car => {
      if (car.id === id) {
        return {...car, status: 'SOLD'}
      }
      return car
    })

    setCars(updateCars)
  }

  const carDisplay = cars.map(car => {
    return (
      <CarListItem key={car.id} {...car} markAsSold={markAsSold}/>
    )
  })

  return (
    <>
      {carDisplay}
      <p>Call us at {contact}</p>
      <input value={contact} onInput={(e) => { setContact(e.target.value) }}/>
    </>
  );
}