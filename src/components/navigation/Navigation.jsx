import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={styles.nav}>
      <NavLink to="/">Contacts</NavLink>
      <div className={styles.singin}>
        <NavLink className={styles.register} to="register">
          Register
        </NavLink>
        <NavLink to="login">Login</NavLink>
      </div>
    </header>
  );
};

export default Navigation;
