import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';



export default function ContactList() {
  const contacts = useSelector(selectContacts); 
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

    return (

<ul className={css.list}>
{filteredContacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <Contact key={id} id={id} name={name} number={number}/>
        </li>
      ))}
    </ul>

    );
}