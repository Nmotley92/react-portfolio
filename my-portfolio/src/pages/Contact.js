import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';


function Contact() {
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
      <div className="contact-info" style={{ textAlign: 'center', width: '100%', maxWidth: '500px' }}>
        <p>Feel free to contact me at:</p>
        
          <p>Email: nmotley92@gmail.com</p>
          <p>Phone: ((217-494-6761))</p>
        
      </div>
    </section>
  );
}

export default Contact;
