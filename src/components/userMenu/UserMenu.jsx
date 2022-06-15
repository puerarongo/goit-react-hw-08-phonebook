import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { profileLogout } from 'redux/operations/profile-operation';
import Button from 'react-bootstrap/Button';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.profile.user.name);

  return (
    <div className={styles.container}>
      <span className={styles.text}>Welcome, {user}!</span>
      <Button
        variant="outline-light"
        size="lg"
        type="button"
        onClick={() => dispatch(profileLogout())}
      >
        Log out
      </Button>
    </div>
  );
};

export default UserMenu;
