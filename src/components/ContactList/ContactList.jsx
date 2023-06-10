import { useSelector} from 'react-redux';
import { getContactsItems } from 'reducer/contactsSlice';
import { getFilterValue } from 'reducer/filtersSlice';
import { List } from './ContactList.styled'
import { ContactItem } from 'components/ContactItem/ContactItem'

export function ContactList() {
  const contacts = useSelector(getContactsItems);
  const filterValue = useSelector(getFilterValue);

  const getFilteredContacts = () => {
    const normalizedFilter = filterValue.toLowerCase().trim();
      return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
}