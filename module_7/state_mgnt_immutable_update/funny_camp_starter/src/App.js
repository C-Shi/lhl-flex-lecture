import './App.css';
import './CampgroundList'
import CampgroundList from './CampgroundList';

function App() {
  return (
    <div className="App">
      <nav className="nav bg-dark">
        <a className="nav-link active" aria-current="page" href="#">Active</a>
        <a className="nav-link" href="#">Home</a>
        <a className="nav-link" href="#">Contact</a>
        <a className="nav-link disabled" href="#" aria-disabled="true">About</a>
      </nav>

      <CampgroundList />
    </div>
  );
}

export default App;
