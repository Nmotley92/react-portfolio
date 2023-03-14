import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setIsFormValid(true);
      console.log('Form submitted:', name, email, message);
      // TODO: send form data to server or other API here
    } else {
      setIsFormValid(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const theme = useTheme();

  return (
    <section>
      <h2>Contact Me</h2>
      {!isFormValid && (
        <p style={{ color: theme.palette.error.main }}>Please fill out all input fields.</p>
      )}
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div className="contact-info">
        <p>Feel free to contact me at:</p>
        <ul>
          <li>Email: nathaniel@example.com</li>
          <li>Phone: (123) 456-7890</li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;


