import { Component } from 'react';

import { nanoid } from 'nanoid';
import { Wrapper } from './App.styled';
import ContactsView from 'components/ContactsView';
import ContactsFilter from 'components/ContactsFilter';
import ContactForm from 'components/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const paeserContacts=JSON.parse(localStorage.getItem('contacts'));
    if (paeserContacts) {
      this.setState({contacts:paeserContacts})

    }

  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.contacts !== this.state.contacts){
localStorage.setItem('contacts',JSON.stringify(this.state.contacts));
    };

  };


  handleSubmit = ({name, number}, { resetForm }) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const indexName = this.state.contacts.findIndex(contact => contact.name === name);
    if (indexName === -1){
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
  
    } else {alert(name + " is already in contacts");};


    resetForm();
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const visibleContact = this.getVisibleContact;
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <ContactsFilter value={this.filter} onChange={this.changeFilter} />
        <ContactsView
          contacts={visibleContact()}
          onDeleteContact={this.deleteContact}
        />
     </Wrapper>
    );
  }
}

export default App;
