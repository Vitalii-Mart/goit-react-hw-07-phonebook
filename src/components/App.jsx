import ContactForm from './ContactForm/';
import ContactList from './ContactList/';
import Filter from './Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'services/contactsApi';
import { Section, Title } from './App.styled';


 const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Section>
  );
};

export default App;