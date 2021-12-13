import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Amazon from './companies/Amazon/Amazon';
import Sprig from './companies/Sprig/Sprig';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/company/Amazon">Amazon</Link>
          </li>
          <li>
            <Link to="/company/Sprig">Sprig</Link>
          </li>
        </nav>
      </div>
      <Routes>
        <Route path="company">
          <Route path="Amazon" element={<Amazon />} />
          <Route path="Sprig" element={<Sprig />} />
        </Route>
        <Route path="/" element={(
          <>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          </>
        )} />
      </Routes>
    </Router>
  );
}

export default App;
