import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';



export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

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