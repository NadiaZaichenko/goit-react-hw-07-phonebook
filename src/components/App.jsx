import { useSelector } from 'react-redux';
import { Filter } from './Filter/Filter';
import { Message } from './Message/Message'
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList'
import { getContactsItems } from 'reducer/contactsSlice';
import { Container, SectionsContainer, Section, Title, SectionTitle } from './App.styles'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const App = () => {
const contactsItems = useSelector(getContactsItems);

  return (
    <Container>
      <Title>Phonebook</Title>
      <SectionsContainer>
        <Section>
          <SectionTitle>Add Contact</SectionTitle>
          <ContactForm />
      </Section>
        <Section >
          <SectionTitle>Contacts</SectionTitle>
       {contactsItems.length !== 0 ? (
       <>
       <Filter/>
       <ContactList/>
       </> 
       ) : ( 
       <Message message="There are no contacts in your phonebook. Please add your first contact!" />)}  
        </Section>
      </SectionsContainer>
      <ToastContainer/>
    </Container>


  )
}

