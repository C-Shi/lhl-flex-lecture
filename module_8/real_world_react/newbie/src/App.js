import { useState } from 'react'
import Home from './Home';
import About from './About';
import Connect from './Connect';
import Navigation from './Navigation';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [page, setPage] = useState('Home')

  return (
    <div className="App">
    <BrowserRouter>
      <Navigation navigate={setPage} mode={page} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/connect" element={<Connect />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
