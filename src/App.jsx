import { Route, Routes, Link } from 'react-router-dom'
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import "./css/App.css"

function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <Link className='link' to="/home">Home</Link>
        <Link className='link' to="/dashboard">Dashboard</Link>
        <Link className='link' to="/about">About</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path='/dashboard/child1' element={<Child1 />} />
          <Route path='/dashboard/child2' element={<Child2 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;