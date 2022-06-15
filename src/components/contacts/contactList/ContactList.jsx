import React from 'react';
import Loader from 'components/loader/Loader';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/operations/contacts-operation';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import styles from './ContactList.module.css';

const ContactList = () => {
  const { isLoading, data } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filterContact = useSelector(state => state.filter);

  const filtredContacts = () => {
    return data.filter(({ name }) =>
      name.toLowerCase().includes(filterContact.toLowerCase())
    );
  };

  return (
    <div className={styles.container}>
      <ul>
        {isLoading ? (
          <Loader />
        ) : (
          data &&
          filtredContacts().map(({ id, name, number }) => {
            return (
              <li key={id} className={styles.contact}>
                <span>
                  {name}: {number}
                </span>
                <Button
                  variant="outline-danger"
                  className={styles.button__delete}
                  type="button"
                  onClick={() => deleteContact(id)}
                >
                  Delete
                </Button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default ContactList;
