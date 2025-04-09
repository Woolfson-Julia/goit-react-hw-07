import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

  
export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  
  const filterContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase().trim()));
  
  return (
      <ul className={css.list}>
        {filterContacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
  );
}