import React from 'react';
import resume from '../Assets/resume.pdf';
import { useTheme } from '@material-ui/core/styles';

function Resume() {
  const theme = useTheme();

  const frontendProficiencies = {
    color: theme.palette.primary.main,
  };

  const backendProficiencies = {
    color: theme.palette.secondary.main,
  };

  return (
    <section>
      <h2>Resume</h2>
      <p>
        Download my resume <a href={resume} download>here</a>.
      </p>
      <div className="proficiencies">
        <h3 style={frontendProficiencies}>Frontend Proficiencies</h3>
        <ul>
          <li style={frontendProficiencies}>HTML5</li>
          <li style={frontendProficiencies}>CSS3</li>
          <li style={frontendProficiencies}>JavaScript</li>
          <li style={frontendProficiencies}>React</li>
          <li style={frontendProficiencies}>jQuery</li>
          <li style={frontendProficiencies}>SASS/SCSS</li>
        </ul>
      </div>
      <div className="proficiencies">
        <h3 style={backendProficiencies}>Backend Proficiencies</h3>
        <ul>
          <li style={backendProficiencies}>Node.js</li>
          <li style={backendProficiencies}>Express</li>
          <li style={backendProficiencies}>MySQL</li>
          <li style={backendProficiencies}>MongoDB</li>
          <li style={backendProficiencies}>RESTful APIs</li>
          <li style={backendProficiencies}>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
