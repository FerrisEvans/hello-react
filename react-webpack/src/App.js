import './App.css';
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {

  return (
      <div className='App'>
        <div>
          <h2>React Router Demo</h2>
        </div>
        <div>
          <div className='nav'>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/home'>Home</NavLink>
          </div>
          <div>
            <Routes>
              <Route path='/about' element={<About/>} />
              <Route path='/home' element={<Home/>} />
              <Route path='/' element={<Navigate to='/about'/>} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
