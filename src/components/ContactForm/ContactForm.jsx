import React, { Component } from "react";
import { nanoid } from "nanoid";

export class ContactForm extends Component {

    state = {
        name: '',
        number: '',
    }

    nameInputId = nanoid();
    numberInputId = nanoid();

    handleInputChange = e => {
        const {name, value} = e.currentTarget;
        this.setState({
          [name]: value,
        });
      };
    
    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state);

        this.reset();
    };  
    
    reset = () => {
        this.setState({ name: '', number: '' })
      }

render() {      
return (
    <div>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor={this.nameInputId}>
                Name
                <br />
                <input 
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                id={this.nameInputId}
                value={this.state.name} 
                onChange={this.handleInputChange}
                />
                <br />
            </label>
            <label htmlFor={this.numberInputId}>
                <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                id={this.numberInputId}
                value={this.state.number}
                onChange={this.handleInputChange}
                />
            </label>
            <br />
            <button type="submit">Add contact</button>
        </form>
    </div>
)
}
};