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
    <section
      style={{
        backgroundColor: `${theme.palette.primary.main}`,
        color: theme.palette.secondary.main,
        padding: '2rem',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
        margin: 'auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <h2>Contact Me</h2>
      {!isFormValid && (
        <p style={{ color: theme.palette.error.main }}>Please fill out all input fields.</p>
      )}
      <div
        className="contact-form"
        style={{
          backgroundColor: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '1rem',
          width: '100%',
          maxWidth: '500px',
        }}
      >
        <form onSubmit={handleSubmit} style={{ width: '100%',textAlign: 'center' }}>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label htmlFor="name" style={{marginRight: '.5rem'}}>Name</label>
            <input type="text" id="name" name="name" value={name} onChange={handleChange} style={{marginLeft: '.5rem'}} required />
          </div>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{marginRight: '.5rem'}}>Email</label>
            <input type="email" id="email" name="email" value={email} onChange={handleChange} style={{marginLeft: '.5rem'}} required />
          </div>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label htmlFor="message" style={{ verticalAlign: 'middle' }}>Message</label>
            <textarea id="message" name="message" value={message} onChange={handleChange} style={{ verticalAlign: 'middle', marginLeft: '.5rem' }} required></textarea>
          </div>
          <div className="form-group" style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <Button type="submit" variant="contained" color="secondary" style={{ color: 'whitesmoke' }}>
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div className="contact-info" style={{ textAlign: 'center', width: '100%', maxWidth: '500px' }}>
        <p>Feel free to contact me at:</p>
        
          <p>Email: nathaniel@example.com</p>
          <p>Phone: (123) 456-7890</p>
        
      </div>
    </section>
  );
}

export default Contact;
