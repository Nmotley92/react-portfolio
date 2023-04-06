import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import profile from '../Assets/propic.jpg';

function About() {
  const theme = useTheme();

  return (
    <section
      style={{
        backgroundColor: `${theme.palette.primary.main}`,
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
        style={{ width: '170px', height: '150px', borderRadius: '50%', objectFit: 'contain' }}
      />
      <p style={{ textAlign: 'center' }}>
        Hi, I'm Nathaniel Motley, a dedicated and resourceful web developer based in the United States. I specialize in building web applications using a wide array of technologies, including React, Node.js, and MongoDB. Recently, I completed an intensive 24-week Full Stack Development bootcamp, earning my certificate and further honing my technical skills.
      </p>
      <p style={{ textAlign: 'center' }}>
        As a driven professional, I excel in both individual and collaborative settings. My strong problem-solving abilities and adaptability make me an invaluable asset to any project or team. In my leisure time, I enjoy pursuing various interests such as hiking, reading, playing video games, and exploring the culinary arts—particularly the art of smoking meat.
      </p>
    </section>
  );
}

export default About;
