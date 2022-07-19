import './App.css';
import Timer from './Timer'
import Data from './Data'
import Event from './Event';
import { useState } from 'react'

function App() {
  const [mode, setMode] = useState('Timer')

  return (
    <div className="App">
      <div>
        <button onClick={() => setMode('Timer')}>Timer</button>
        <button onClick={() => setMode('Event')}>Event</button>
        <button onClick={() => setMode('Data')}>Data</button>
      </div>
      {mode === 'Timer' && <Timer />}
      {mode === 'Event' && <Event />}
      {mode === 'Data' && <Data />}
    </div>
  );
}

export default App;
