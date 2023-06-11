import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Filter } from './Filter/Filter';
import { Message } from './Message/Message'
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/loader';
import { fetchContacts } from 'reducer/operation';
import { selectContactsItems, selectIsLoading, selectError } from 'reducer/selectors';
import { Container, SectionsContainer, Section, Title, SectionTitle } from './App.styles'
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const App = () => {
const contactsItems = useSelector(selectContactsItems);
const isLoading = useSelector(selectIsLoading);
const error = useSelector(selectError);

const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchContacts());
}, [dispatch]);

useEffect(() => {
  if(error) {
    toast.error(error);
  }
  if(error === 'ERR_BAD_REQUEST') {
    toast.error('There are some problems. Try again later')
  };
}, [error])

  return (
    <Container>
      {isLoading && <Loader/>}
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

