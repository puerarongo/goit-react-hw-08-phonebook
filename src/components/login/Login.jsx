import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { profileLogin } from 'redux/operations/profile-operation';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import styles from '../contacts/formContacts/FormContacts.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

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
    const user = { email: email, password: password };

    dispatch(profileLogin(user));

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1>Login</h1>
      <div className={styles.container}>
        <Form onSubmit={submitHandler}>
          <Form.Label className={styles.form__title}>
            Email
            <InputGroup>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={inputHandler}
                required
              />
            </InputGroup>
          </Form.Label>
          <Form.Label className={styles.form__title}>
            Password
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={inputHandler}
              required
            />
          </Form.Label>
          <Button className={styles.button} type="sumbmit">
            Click to Login
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
