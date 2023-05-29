import ContactForm from './ContactForm/';
import ContactList from './ContactList/';
import Filter from './Filter';
import { Section, Title } from './App.styled';

 const App = () => {
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