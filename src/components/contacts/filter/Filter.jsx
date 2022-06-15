import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filtration } from '../../../redux/actions/contacts-actions';
import Form from 'react-bootstrap/Form';
import styles from './Filter.module.css';

const Filter = () => {
  const filterContact = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const inputHandler = e => {
    dispatch(filtration(e.currentTarget.value));
  };

  return (
    <div className={styles.container}>
      <Form.Label>
        Find contacts by name:
        <Form.Control
          className={styles.form__input}
          type="text"
          name="filter"
          value={filterContact}
          onChange={inputHandler}
        ></Form.Control>
      </Form.Label>
    </div>
  );
};

export default Filter;
