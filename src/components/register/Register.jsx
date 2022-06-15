import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { profileRegistration } from 'redux/operations/profile-operation';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import styles from '../contacts/formContacts/FormContacts.module.css';

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
    <>
      <h1>User registration</h1>
      <div className={styles.container}>
        <Form onSubmit={submitHandler}>
          <Form.Label className={styles.form__title}>
            Profile Name
            <Form.Control
              type="text"
              name="profileName"
              value={profileName}
              onChange={inputHandler}
              required
            />
          </Form.Label>
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
            Click to Registration
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
