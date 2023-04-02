import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Contacts } from "./Contacts/Contacts";
import { Form } from "./Form/Form";
import { Section } from "./Section/Section";

export class App extends Component {
  
  state = {
    contacts: [],
  }

addContact = ({name, number}) => {
  const contact = {
    id: nanoid(),
    name,
    number,
  };

  this.setState(prevState => ({
    contacts: [contact, ...prevState.contacts],
  }))
};

render() {
  return (
    <>
    <Section title="Phonebook" />
    <Form 
    onSubmit={this.addContact}
    />
    <Section title="Contacts" />
    <Contacts contacts={this.state.contacts}/>
    </>
  )
}

};