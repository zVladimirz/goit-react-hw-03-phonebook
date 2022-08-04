import PropTypes from 'prop-types';
import { ContactsViewListText } from './ContactsItems.styled';

const ContactsItems = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <ContactsViewListText>{name + ': ' + number}</ContactsViewListText>
      <button onClick={() => onDeleteContact(id)}>Удалить</button>
    </>
  );
};

ContactsItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsItems;
