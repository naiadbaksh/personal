import React from "react";

import FormInput from "../form-input/form-input.component";
import { ContactContainer, ContactTitle } from "./contact-form.styles";
import Button from "../button/button.component";

class ContactForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      text: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, text } = this.state;
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <ContactContainer>
        <ContactTitle>Like to get in touch?</ContactTitle>
        <span>Drop me a line. I'd love to connect.</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            label="Name"
            required
            className="name"
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="message"
            name="text"
            value={message}
            onChange={this.handleChange}
            label="Message"
            required
            style={{ margin: "0px 0px", height: "100px" }}
          />
          <Button type="submit">Send</Button>
        </form>
      </ContactContainer>
    );
  }
}

export default ContactForm;
