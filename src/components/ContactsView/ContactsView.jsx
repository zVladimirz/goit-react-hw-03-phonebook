import PropTypes from 'prop-types';
import { ContactsViewList, ContactsViewListItem } from './ContactsView.styled';
import ContactsItems from 'components/ContactsItems';

const ContactsView = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsViewList>
      {contacts.map(({ id, name, number }) => (
        <ContactsViewListItem key={id}>
          <ContactsItems
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        </ContactsViewListItem>
      ))}
    </ContactsViewList>
  );
};

ContactsView.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsView;
