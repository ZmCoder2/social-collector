import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './index.css'
// import { faHome }

function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Blog</a></li>
        
      </ul>
    </nav>
  );
}

export default Nav;
