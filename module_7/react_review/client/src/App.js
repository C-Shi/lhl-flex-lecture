import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App container">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <i class="bi bi-card-list"></i> &nbsp; Dummy Todo
          </a>
        </div>
      </nav>
      <TodoList />
    </div>
  );
}

export default App;
