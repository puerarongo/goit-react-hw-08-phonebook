import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { profileRegistration } from 'redux/operations/profile-operation';
import styles from '../contacts/form/Form.module.css';

const Register = () => {
  const [profileName, setProfileName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  // todo func
  const inputHandler = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'profileName':
        return setProfileName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    const user = { name: profileName, email: email, password: password };

    dispatch(profileRegistration(user));
    setProfileName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <label className={styles.form__title}>
          Profile Name
          <input
            className={styles.input__form}
            type="text"
            name="profileName"
            value={profileName}
            onChange={inputHandler}
            required
          />
        </label>
        <label className={styles.form__title}>
          Email
          <input
            className={styles.input__form}
            type="email"
            name="email"
            value={email}
            onChange={inputHandler}
            required
          />
        </label>
        <label className={styles.form__title}>
          Password
          <input
            className={styles.input__form}
            type="password"
            name="password"
            value={password}
            onChange={inputHandler}
            required
          />
        </label>
        <button className={styles.form__button} type="sumbmit">
          Click to Register
        </button>
      </form>
    </div>
  );
};

export default Register;
