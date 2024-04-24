import './App.css';
import {NavLink, useRoutes} from "react-router-dom";
import routes from "./route";

function App() {
  const el = useRoutes(routes)

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
            {el}
          </div>
        </div>
      </div>
  );
}

export default App;
