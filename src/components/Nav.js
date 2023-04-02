import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../styles/Nav.module.css';

function Nav() {
  return (
    <header className={styles.header}>
      <h1>Math Magicians</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <hr />
          <li>
            <NavLink to="/calculator">
              Calculator
            </NavLink>
          </li>
          <hr />
          <li>
            <NavLink to="/quotes">
              Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
