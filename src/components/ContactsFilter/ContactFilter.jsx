import React from 'react';
import PropTypes from 'prop-types';
import {Input } from './styled';

const ContactFilter = ({ onChange, value }) => (
  <label>
    <Input type="text" value={value}  onChange={onChange} />
  </label>
);

ContactFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}


export default ContactFilter;