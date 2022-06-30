'use strict';
const { useState, createElement } = React;

function Counter() {
  const [count, setCount] = useState(0);

  const style = {
    border: '1px solid black',
    padding: '50px',
    width: '100px',
    textAlign: 'center',
    fontSize: '32px'
  }


  return (
    <div className="counter">
      <Title title={`Incremental Counter at ${count}`} />
      <div style={style}>{count}</div>
      <button onClick={() => { setCount(count + 1) }}>Add</button>
    </div>
  )
}

function Title(props) {
  return (
    <h3>{props.title}</h3>
  )
}

const domContainer = document.querySelector('#application');
const root = ReactDOM.createRoot(domContainer);
root.render(createElement(Counter));

