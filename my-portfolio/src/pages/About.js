import React from 'react';
import { useTheme } from '@material-ui/core/styles';

function About() {
  const theme = useTheme();

  return (
    <section style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.secondary.main }}>
      <h2>About Me</h2>
      <img src="https://via.placeholder.com/150" alt="Nathaniel Motley" />
      <p>Hi, I'm Nathaniel Motley! I'm a web developer based in the United States. I have experience building web applications using a variety of technologies, including React, Node.js, and MongoDB.</p>
      <p>In my free time, I enjoy hiking, reading, and playing video games.</p>
    </section>
  );
}

export default About;

