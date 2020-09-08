import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './NavBar.css';

export const NavBar = () => {
  const location = useLocation();

  const getClassName = path => {
    const classNames = ['navbar__link'];
    if(path === location.pathname) classNames.push('current');

    return classNames.join(' ');
  }

  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li className="navbar__linkWrapper">
          <Link className={getClassName('/')} to="/">Home</Link>
        </li>
        <li className="navbar__linkWrapper">
          <Link className={getClassName('/locations')} to="/locations">Locations</Link>
        </li>
        <li className="navbar__linkWrapper">
          <Link className={getClassName('/products')} to="/products">Products</Link>
        </li>
        <li className="navbar__linkWrapper">
          <Link className={getClassName('/employees')} to="/employees">Employees</Link>
        </li>
        <li className="navbar__linkWrapper">
          <Link className="navbar__link" to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};