import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { List, Total, Items, Caption, Button  } from './ContactList.styled';
import { deleteContact } from 'services/contactsApi';
import { getContacts, getFilterValue } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
const filter = useSelector(getFilterValue);
  
  
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  const filteredContacts = contacts?.filter(({ name }) =>
  name.toLowerCase().includes(filter)
);
  return (
    <List >
      <Total>
        Total contacts: {filteredContacts?.length}
      </Total>
      {filteredContacts?.map(elm => (
        <Items key={elm.id}>
          <Caption>
            {elm.name}: {elm.phone}
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