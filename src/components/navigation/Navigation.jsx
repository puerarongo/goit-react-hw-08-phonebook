import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from 'components/userMenu/UserMenu';
import styles from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.profile.isLoggedIn);

  return (
    <header className={styles.nav}>
      {isLoggedIn ? (
        <>
          <NavLink className={styles.link} to="/">
            Contacts
          </NavLink>
          <div className={styles.singin}>
            <UserMenu />
          </div>
        </>
      ) : (
        <div className={styles.singin}>
          <NavLink className={styles.register} to="register">
            Register
          </NavLink>
          <NavLink className={styles.link} to="login">
            Login
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navigation;
