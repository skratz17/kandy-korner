import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => (
  <nav className="navbar">
    <ul className="navbar__links">
      <li className="navbar__linkWrapper">
        <Link className="navbar__link" to="/">Home</Link>
      </li>
      <li className="navbar__linkWrapper">
        <Link className="navbar__link" to="/locations">Locations</Link>
      </li>
      <li className="navbar__linkWrapper">
        <Link className="navbar__link" to="/products">Products</Link>
      </li>
    </ul>
  </nav>
);