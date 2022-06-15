import React from 'react';
import FormContacts from './formContacts/FormContacts';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
//import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <FormContacts />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
