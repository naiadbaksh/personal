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

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <ContactContainer>
        <ContactTitle>Like to get in touch?</ContactTitle>
        <span id="contact-form-help">Drop me a line. I'd love to connect.</span>
        <form
          className="sign-up-form"
          action="https://formsubmit.co/naiadbaksh@gmail.com"
          method="POST"
          acceptCharset="UTF-8"
        >
          <input
            type="hidden"
            name="_subject"
            value="New contact form submission"
          />
          <input type="hidden" name="_captcha" value="false" />
          <FormInput
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange}
            label="Name"
            required
            className="name"
            autoComplete="name"
          />
          <FormInput
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
            autoComplete="email"
          />
          <FormInput
            type="text"
            name="text"
            id="message"
            value={message}
            onChange={this.handleChange}
            label="Message"
            required
            style={{ margin: "0px 0px", height: "100px" }}
            autoComplete="off"
            aria-describedby="contact-form-help"
          />
          <Button type="submit">Send</Button>
        </form>
      </ContactContainer>
    );
  }
}

export default ContactForm;
