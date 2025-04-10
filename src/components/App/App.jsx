import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { fetchContacts } from "../../redux/contactsOps";
import {
  selectContacts,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import css from "./App.module.css";


export default function App() {

  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

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
