import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Project from '../components/Project';
import styles from './Portfolio.module.css';
import longevity from '../Assets/Longevity-project.png';
import dailyplaner from '../Assets/Daily-planner-project.png';
import weatherdashboard from '../Assets/Weather-Dashboard-project.png';
import coderscorner from '../Assets/Codres-corner-project.png';
import notetaker from '../Assets/note-taker-project.png';
import jate from '../Assets/Jate-project.png';

function Portfolio() {
  const theme = useTheme();

  const projects = [
    {
      title: 'Longevity',
      image: longevity,
      description:
        'A comprehensive full-stack fitness app that enables users to create personalized profiles, design workout plans, and discover new exercises with detailed instructions. The app supports users on their health journey by simplifying goal achievement, offering tailored plans, and providing easy access to exercise guidance.',
      liveUrl: 'https://rocky-thicket-55053.herokuapp.com/',
      repoUrl: 'https://github.com/alexisbenavidez99/workout-tracker',
    },
    {
      title: 'Daily Planner',
      image: dailyplaner,
      description:
        'A sleek calendar app that dynamically manages user events and recommends local concerts. Powered by jQuery, the app auto-curates suggestions based on user location or enables custom city searches, all within an intuitively designed interface.',
      liveUrl: 'https://nmotley92.github.io/group-project/',
      repoUrl: 'https://github.com/Nmotley92/group-project',
    },
    {
      title: 'Coders Corner',
      image: coderscorner,
      description:
        'Coders Corner is an interactive tech blog for developers, where users can log in, create posts, engage in discussions, and share insights on various programming topics.',
      liveUrl: 'https://glacial-beach-87311.herokuapp.com/',
      repoUrl: 'https://github.com/Nmotley92/tech-blog',
    },
    {
      title: 'Weather Dashboard',
      image: weatherdashboard,
      description:
        'A global weather dashboard that showcases real-time weather and a five-day forecast for cities worldwide. The user-friendly interface, powered by jQuery, dynamically updates with OpenWeather API data based on user input.',
      liveUrl: 'https://nmotley92.github.io/weather-dash',
      repoUrl: 'https://nmotley92.github.io/weather-dash/',
    },
    {
      title: 'Note Taker',
      image: notetaker,
      description:
        'A streamlined note-taking app that allows users to effortlessly create, save, and delete notes. Powered by Express.js, the app dynamically adapts to user input, providing an efficient and seamless experience.',
      liveUrl: ' https://thawing-citadel-61560.herokuapp.com/notes',
      repoUrl: 'https://github.com/Nmotley92/note-taker',
    },
    {
      title: 'Jate',
      image: jate,
      description:
      'JATE, or Just Another Text Editor, is an installable PWA designed for developers to easily write and edit code. This versatile tool streamlines the coding process, providing a seamless and efficient experience for users.',
      liveUrl: 'https://serene-taiga-79475.herokuapp.com/',
      repoUrl: 'https://github.com/Nmotley92/jate',
    },

  ];

  return (
    <section
      className={styles.portfolio}
      style={{
        backgroundColor: `${theme.palette.primary.main}80`,
        color: theme.palette.secondary.main,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        width: '75%',
        borderRadius: '1rem',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <h2>Portfolio</h2>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;



