import React from 'react';
import PropTypes from 'prop-types';
import { Button, Item, Text } from './styled';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <Button onClick={() => onDelete(id)}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;


