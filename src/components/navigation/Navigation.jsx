import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from 'components/userMenu/UserMenu';
import styles from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.profile.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <header className={styles.nav}>
      <NavLink to="/">Contacts</NavLink>

      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <div className={styles.singin}>
          <NavLink className={styles.register} to="register">
            Register
          </NavLink>
          <NavLink to="login">Login</NavLink>
        </div>
      )}
    </header>
  );
};

export default Navigation;
