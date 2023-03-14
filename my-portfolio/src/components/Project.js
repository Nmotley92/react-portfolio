import React from 'react';
import { useTheme } from '@material-ui/core/styles';

function Project({ project }) {
  const theme = useTheme();

  return (
    <div className="project" style={{ backgroundColor: theme.palette.background.paper }}>
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
      </a>
      <p>{project.description}</p>
      <div className="links">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live</a>
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}

export default Project;


