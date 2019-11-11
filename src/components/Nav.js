import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTkCwMRO2WCvZpTJC5V-YcpPRuxLKhzc3pnsY78hmtSKNhF-sT" width="100" height="50" alt="NBA" />
      </NavLink>
    </nav>
  );
};

export default Nav;
