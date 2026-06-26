import React from "react";

import FormInput from "../form-input/form-input.component";
import { ContactContainer, ContactTitle } from "./contact-form.styles";
import Button from "../button/button.component";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      text: "",
      errors: {},
      status: "idle",
    };
  }

  validateField = (name, value) => {
    const errors = {};

    if (name === "name") {
      if (!value.trim()) {
        errors.name = "Please enter your name.";
      }
    }

    if (name === "email") {
      if (!value.trim()) {
        errors.email = "Please enter your email address.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errors.email = "Please enter a valid email address.";
      }
    }

    if (name === "text") {
      if (!value.trim()) {
        errors.text = "Please enter a message.";
      } else if (value.trim().length < 10) {
        errors.text = "Please enter at least 10 characters.";
      }
    }

    return errors;
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    const fieldErrors = this.validateField(name, value);

    this.setState((prevState) => ({
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: fieldErrors[name],
      },
      status: "idle",
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, text } = this.state;
    const nextErrors = {
      ...this.validateField("name", name),
      ...this.validateField("email", email),
      ...this.validateField("text", text),
    };

    if (Object.keys(nextErrors).length > 0) {
      this.setState({ errors: nextErrors, status: "error" });
      return;
    }

    this.setState({ errors: {}, status: "success" });
    this.props.onSubmitSuccess && this.props.onSubmitSuccess();
  };

  render() {
    const { name, email, text, errors, status } = this.state;
    return (
      <ContactContainer>
        <ContactTitle>Like to get in touch?</ContactTitle>
        <span id="contact-form-help">Drop me a line. I'd love to connect.</span>
        <form
          className="sign-up-form"
          action="https://formsubmit.co/naiadbaksh@gmail.com"
          method="POST"
          acceptCharset="UTF-8"
          onSubmit={this.handleSubmit}
        >
          <input
            type="hidden"
            name="_subject"
            value="New contact form submission"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="name" value={name} />
          <input type="hidden" name="email" value={email} />
          <input type="hidden" name="message" value={text} />
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
            error={errors.name}
          />
          {errors.name ? <div className="form-error">{errors.name}</div> : null}
          <FormInput
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
            autoComplete="email"
            error={errors.email}
          />
          {errors.email ? (
            <div className="form-error">{errors.email}</div>
          ) : null}
          <FormInput
            type="text"
            name="text"
            id="message"
            value={text}
            onChange={this.handleChange}
            label="Message"
            required
            style={{ margin: "0px 0px", height: "100px" }}
            autoComplete="off"
            aria-describedby="contact-form-help"
            error={errors.text}
          />
          {errors.text ? <div className="form-error">{errors.text}</div> : null}
          {status === "success" ? (
            <div className="form-success" role="status">
              Thanks! Your message has been sent.
            </div>
          ) : null}
          {status === "error" ? (
            <div className="form-error" role="alert">
              Please fix the highlighted fields and try again.
            </div>
          ) : null}
          <Button type="submit">Send</Button>
        </form>
      </ContactContainer>
    );
  }
}

export default ContactForm;
