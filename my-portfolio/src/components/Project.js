import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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

  const titleStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.5em',
  };

  const iconStyle = {
    color: '#F18F01',
    fontSize: '2em',
  };

  return (
<> <div>
    <div
      className="project"
      style={projectWrapperStyle}
      onMouseEnter={(e) => (e.currentTarget.lastChild.style.opacity = 1)}
      onMouseLeave={(e) => (e.currentTarget.lastChild.style.opacity = 0)}
    >
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
        <img src={project.image} alt={project.title} style={imageStyle} />
      </a>
      <div className="project-info" style={projectInfoStyle}>
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={titleStyle}>
          <h3>{project.title}</h3>
        </a>
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" style={iconStyle}>
          
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
    <p style={{
        backgroundColor: `${theme.palette.primary.main}`,
        color: theme.palette.secondary.main,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        borderRadius: '1rem', // Added rounded corners

      }}>{project.description}</p>
    </div>
    </>
    
  );
}

export default Project;


