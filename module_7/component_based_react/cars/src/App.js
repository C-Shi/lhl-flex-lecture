import './App.css';
import Car from './Car'

function App() {
  const cars = [
    { id: 1, model: 'F-150', make: 'Ford', price: 5000 },
    { id: 2, model: 'Corolla', make: 'Toyota', price: 2000}
  ]

  const carDisplay = cars.map(car => {
    return (
      <Car key={car.id} model={car.model} make={car.make} price={car.price} />
    )
  })
  return (
    <>
      {carDisplay}
    </>
  );
}

export default App;
