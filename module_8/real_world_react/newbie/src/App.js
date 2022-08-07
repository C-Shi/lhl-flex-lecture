import { useState } from 'react'
import Home from './Home';
import About from './About';
import Connect from './Connect';
import Navigation from './Navigation';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [user, setUser] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation auth={setUser} user={user}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About user={user} />}></Route>
          <Route path="/connect" element={<Connect user={user} />}></Route>
        </Routes>
      </BrowserRouter>

      {/* {page === 'Home' && <Home />}
      {page === 'About' && <About user={user}  />}
      {page === 'Connect' && <Connect user={user} />} */}
    </div>
  );
}

export default App;
