import React, { useState } from 'react';
import styles from '../contacts/form/Form.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // todo func
  const inputHandler = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
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
    console.log(email, password);

    setEmail('');
    setPassword('');
  };
  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
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
          Click to Login
        </button>
      </form>
    </div>
  );
};

export default Login;
