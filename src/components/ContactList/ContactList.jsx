import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import ContactItem from 'components/ContactItem/ContactItem';

import {
  ContactListContainer,
  ContactsList,
  ContactNotification,
} from 'components/ContactList/ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.directory);

  const filter = useSelector(state => state.filter.filter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ContactListContainer>
      {contacts.length !== 0 ? (
        <ContactsList>
          {getFilteredContacts().map(({ id, name, number }) => (
            <ContactItem id={id} name={name} number={number} />
          ))}
        </ContactsList>
      ) : (
        <ContactNotification>
          You don't have any contacts in your phonebook
        </ContactNotification>
      )}
    </ContactListContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
