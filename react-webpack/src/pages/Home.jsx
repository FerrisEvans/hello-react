import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Home = () => {
  return (
    <>
      <h3>Home - Home</h3>
      <div className='nav'>
        <NavLink to='msg'>Message</NavLink>
        <NavLink to='news'>News</NavLink>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Home;