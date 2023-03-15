import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import githubLogo from '../Assets/GitHub-Logo.png';

function Project({ project }) {
  const theme = useTheme();

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const projectWrapperStyle = {
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '15px',
  };

  const projectInfoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.7)',
    opacity: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'opacity 0.3s',
  };

  return (
    <div
      className="project"
      style={projectWrapperStyle}
      onMouseEnter={(e) => (e.currentTarget.lastChild.style.opacity = 1)}
      onMouseLeave={(e) => (e.currentTarget.lastChild.style.opacity = 0)}
    >
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
        <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%'}} />
      </a>
      <div className="project-info" style={projectInfoStyle}>
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          <h3 style={{ color: 'white' }}>{project.title}</h3>
        </a>
        <p style={{ color: 'white', margin: '0.5rem 0' }}>{project.description}</p>
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" width="32" height="32" />
        </a>
      </div>
    </div>
  );
}

export default Project;
