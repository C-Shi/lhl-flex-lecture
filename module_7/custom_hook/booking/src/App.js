import { useState } from 'react'
import './App.css';
import CampgroundList from './Campground/CampgroundList';
import HotelList from './Hotel/HotelList'

function App() {
  const [page, setPage] = useState('Campground')
  return (
    <div className="App">
      <nav className="nav bg-dark">
        <a className="nav-link" href="#" onClick={() => setPage('Campground')}>Campground</a>
        <a className="nav-link" href="#" onClick={() => setPage('Hotel')}>Hotel</a>
      </nav>

      {page === 'Campground' && <CampgroundList />}
      {page === 'Hotel' && <HotelList />}
    </div>
  );
}

export default App;
