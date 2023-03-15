import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import profile from '../Assets/propic.jpg';

function About() {
  const theme = useTheme();

  return (
    <section
      style={{
        backgroundColor: `${theme.palette.primary.main}80`,
        color: theme.palette.secondary.main,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        width: '75%',
        borderRadius: '1rem', // Added rounded corners
        position: 'absolute', // Added for centering
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Added for centering
      }}
    >
      <h2>About Me</h2>
      <img
        src={profile}
        alt="Nathaniel Motley"
        style={{ width: '150px', height: '150px', borderRadius: '50%' }}
      />
      <p style={{ textAlign: 'center' }}>
        Hi, I'm Nathaniel Motley! I'm a web developer based in the United States. I have experience building web applications using a variety of technologies, including React, Node.js, and MongoDB.
      </p>
      <p style={{ textAlign: 'center' }}>
        In my free time, I enjoy hiking, reading, and playing video games.
      </p>
    </section>
  );
}

export default About;
