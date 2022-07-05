# Component based UI with React
## React - Declarative UI framework
1. Developer describe **what** to show, NOT **how** to achieve that
2. React determine **when** to render, not you
3. React re-render is not synchronous when data change
4. Data ownership is a key concept in understanding React

## Advanced JSX syntax
1. Fragement

```js
// <></> will inject a container to React but not adding any actual html element
export default function App() {
  return (
    <>
      <h5>Model: F-150</h5>
      <div>Make: Ford</div>
      <div>Price: $5000</div>
    </>
  )
}
```

2. JSX element child array

```js
function App() {
  const cars = [
    { model: 'F-150', make: 'Ford', price: 5000 },
    { model: 'Corolla', make: 'Toyota', price: 5000}
  ]

  const carDisplay = cars.map(car => {
    return (
      <div key={car.model}>
        <h5>Model: {car.model}</h5>
        <p>Make: {car.make}</p>
        <p>Price: ${car.price}</p>
      </div>
    )
  })
  return (
    <>
      {carDisplay}
    </>
  );
}
```