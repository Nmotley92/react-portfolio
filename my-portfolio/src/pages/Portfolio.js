import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Project from '../components/Project';

function Portfolio() {
  const theme = useTheme();

  const projects = [
    {
      title: 'Project 1',
      image: 'https://via.placeholder.com/150',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada auctor neque id convallis.',
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/example/project-1',
    },
    {
      title: 'Project 2',
      image: 'https://via.placeholder.com/150',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada auctor neque id convallis.',
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/example/project-2',
    },
    {
      title: 'Project 3',
      image: 'https://via.placeholder.com/150',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada auctor neque id convallis.',
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/example/project-3',
    },
  ];

  return (
    <section>
      <h2 style={{ color: theme.palette.primary.main }}>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;



