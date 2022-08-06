import { useState } from 'react'
import Home from './Home';
import About from './About';
import Connect from './Connect';
import Navigation from './Navigation';

function App() {
  const [page, setPage] = useState('Home');
  const [user, setUser] = useState('')

  return (
    <div className="App">
      <Navigation navigate={setPage} auth={setUser} user={user} mode={page}/>
      {page === 'Home' && <Home />}
      {page === 'About' && <About user={user}  />}
      {page === 'Connect' && <Connect user={user} />}
    </div>
  );
}

export default App;
