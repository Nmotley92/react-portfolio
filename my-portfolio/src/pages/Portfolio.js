import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Project from '../components/Project';
import styles from './Portfolio.module.css';
import longevity from '../Assets/Longevity-project.png';
import dailyplaner from '../Assets/Daily-planner-project.png';
import weatherdashboard from '../Assets/Weather-Dashboard-project.png';
import coderscorner from '../Assets/Codres-corner-project.png';
import notetaker from '../Assets/note-taker-project.png';
import BookHaven from '../Assets/BookHaven.png';


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
      title: 'BookHaven',
      image: BookHaven,
      description:
        'BookHaven is a full-stack MERN app that allows users to search for books, save them to a personal library, and leave reviews. The app is powered by React, MongoDB, and Express.js, and utilizes the Google Books API and JWT authentication',
      liveUrl: 'https://book-haven.herokuapp.com/',
      repoUrl: 'https://github.com/Nmotley92/e-commerce-site',
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


  ];

  return (
    <section
      className={styles.portfolio}
      style={{
        color: theme.palette.secondary.main,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        width: '75%',
        borderRadius: '1rem',
        margin: '0 auto',
      }}
    >

      <div className={styles.projects}>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;


