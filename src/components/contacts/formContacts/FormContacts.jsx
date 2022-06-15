import React, { useState } from 'react';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/operations/contacts-operation';
import { Report } from 'notiflix/build/notiflix-report-aio';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './FormContacts.module.css';

const FormContacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  // todo Function
  const inputHandler = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    const contact = { name: name, number: number };

    if (data) {
      const newArr = data.map(({ name }) => name.toLowerCase());
      if (newArr.includes(name.toLowerCase())) {
        return Report.failure(
          'Failure',
          `${name} is already in contacts!`,
          'Try again'
        );
      }
    }

    addContact(contact);
    setName('');
    setNumber('');
  };

  return (
    <div className={styles.container}>
      <Form onSubmit={submitHandler}>
        <Form.Label className={styles.form__title}>
          Name
          <Form.Control
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={inputHandler}
            required
          />
        </Form.Label>
        <Form.Label className={styles.form__title}>
          Number
          <Form.Control
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={inputHandler}
            required
          />
        </Form.Label>
        <Button className={styles.button} type="sumbmit">
          Add contact
        </Button>
      </Form>
    </div>
  );
};

export default FormContacts;
