import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList"
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { fetchContacts } from "../../redux/contactsOps";
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader'




export default function App() {
  const contacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.loading);
  const isError = useSelector(state => state.contacts.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}
