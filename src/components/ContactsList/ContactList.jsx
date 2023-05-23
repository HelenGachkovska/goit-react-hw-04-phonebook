import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/index';
import { List } from './styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(el => {
        return (
          <ContactItem
            name={el.name}
            number={el.number}
            key={el.id}
            id={el.id}
            onDelete={onDelete}
          />
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
