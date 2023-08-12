import { useState } from 'react'
import './App.css';
import CampgroundList from './Campground/CampgroundList';
import HotelList from './Hotel/HotelList'
import initialCampgrounds from './db/campground'
import initialHotels from './db/hotel'
import useApplicationData from './hooks/useApplicationData';

function App() {
  const { page, campgrounds, hotels } = useApplicationData('Campground', initialCampgrounds, initialHotels)
  return (
    <div className="App">
      <nav className="nav bg-dark">
        <a className="nav-link" href="#" onClick={() => page.setPage('Campground')}>Campground</a>
        <a className="nav-link" href="#" onClick={() => page.setPage('Hotel')}>Hotel</a>
      </nav>

      {page.page === 'Campground' && <CampgroundList campgrounds={campgrounds}/>}
      {page.page === 'Hotel' && <HotelList hotels={hotels} />}
    </div>
  );
}

export default App;
