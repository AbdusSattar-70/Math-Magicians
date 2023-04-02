import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../styles/Nav.module.css';

function Nav() {
  return (
    <header>
      <nav>
        <NavLink to="/" className={styles.navLink}>
          Home
        </NavLink>
        <NavLink to="/calculator" className={styles.navLink}>
          Calculator
        </NavLink>
        <NavLink to="/quotes" className={styles.navLink}>
          Quotes
        </NavLink>
      </nav>
    </header>
  );
}

export default Nav;
