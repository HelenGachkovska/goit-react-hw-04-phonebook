import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactsForm from './ContactsForm/index';
import ContactList from './ContactsList/index';
import ContactFilter from './ContactsFilter/index';
import { AppContainer, AppTitle } from './styled';

const startContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? startContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const createContact = props => {
    const { name, number, id = nanoid() } = props;

    const arrayValue = contacts.map(el => el.name.toLowerCase());

    console.log(arrayValue);
    if (arrayValue.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts([...contacts, { name, number, id }]);
  };

  const handlerFilterInput = e => {
    setFilter(e.target.value);
  };

  const handlerDeleteItem = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredOutArray = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <AppContainer>
      <ContactsForm createContact={createContact} />
      <AppTitle>Contacts</AppTitle>
      <ContactFilter value={filter} onChange={handlerFilterInput} />
      <ContactList contacts={filteredOutArray} onDelete={handlerDeleteItem} />
    </AppContainer>
  );
}

export default App;
