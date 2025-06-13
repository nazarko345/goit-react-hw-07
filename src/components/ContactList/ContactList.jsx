import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <Contact contacts={contact} key={contact.id} />
      ))}
    </ul>
  );
}

// <li key={contact.id}>
//   {contact.name}: {contact.tel}
// </li>