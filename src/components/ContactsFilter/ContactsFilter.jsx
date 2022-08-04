import PropTypes from 'prop-types';
import { Input } from './ContactsFilter.styled';

const ContactsFilter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name <br />
      <Input type="text" value={value} onChange={onChange} />
    </label>
  );
};

ContactsFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default ContactsFilter;
