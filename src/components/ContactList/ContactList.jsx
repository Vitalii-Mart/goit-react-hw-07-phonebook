import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { List, Total, Items, Caption, Button  } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const filter = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List >
      <Total>
        Total contacts: {filteredContacts.length}
      </Total>
      {filteredContacts.map(elm => (
        <Items key={elm.id}>
          <Caption>
            {elm.name}: {elm.number}
          </Caption>
          <Button
            onClick={() => dispatch(deleteContact(elm.id))}
          >
            Delete
          </Button>
        </Items>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  onClick: PropTypes.func,
};

export default ContactList;