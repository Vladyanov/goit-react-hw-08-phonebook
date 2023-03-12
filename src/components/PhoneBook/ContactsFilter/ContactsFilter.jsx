import css from './contacts-filter.module.scss';
import PropTypes from 'prop-types';

const ContactsFilter = ({ handleChange, value }) => {
  return (
    <>
      <h3 className={css.title}>Contacts</h3>
      <label className={css.label}>Find contacts by name</label>
      <input
        value={value}
        name="filter"
        className={css.input}
        onChange={handleChange}
      />
    </>
  );
};

export default ContactsFilter;

ContactsFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
