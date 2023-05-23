// import React, { Component } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Title, Form, Label, Text, Input, Button } from './styled';

function ContactsForm({createContact}) {
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);

  const handlerInputName = e => {
    setName(e.target.value);
  };

  const handlerInputNamber = e => {
    setNumber(e.target.value);
  };

  const handlerSubmitForm = e => {
    e.preventDefault();
    createContact({
      name,
      number
    })
    e.target.reset();
  };

  return (
    <Form onSubmit={handlerSubmitForm}>
      <Title>Phonebook</Title>
      <Label>
        <Text>Name</Text>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handlerInputName}
        />
      </Label>
      <Label>
        <Text>Number</Text>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handlerInputNamber}
        />
      </Label>
      <Button>Add contact</Button>
    </Form>
  );
}

// class OldContactsForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handlerInput = e => {
//     const targetKey = e.target.name;
//     this.setState({ [targetKey]: e.target.value });
//   };

//   hanlerSubmitForm = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     e.target.reset();
//   };

//   render() {
//     return (
//       <Form onSubmit={this.hanlerSubmitForm}>
//         <Title>Phonebook</Title>
//         <Label>
//           <Text>Name</Text>
//           <Input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handlerInput}
//           />
//         </Label>
//         <Label>
//           <Text>Number</Text>
//           <Input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.handlerInput}
//           />
//         </Label>
//         <Button>Add contact</Button>
//       </Form>
//     );
//   }
// }

ContactsForm.propTypes = {
  createContact: PropTypes.func.isRequired,
};

export default ContactsForm;
