import ContactForm from './ContactForm/';
import ContactList from './ContactList/';
import Filter from './Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'services/contactsApi';
import { Section, Title } from './App.styled';
import { ColorRing } from 'react-loader-spinner';


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
      {isLoading && !error && (
        <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}/>
      )}
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Section>
  );
};

export default App;