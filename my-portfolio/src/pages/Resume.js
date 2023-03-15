import React from 'react';
import resume from '../Assets/resume.pdf';
import { useTheme } from '@material-ui/core/styles';
import html from '../Assets/HTML.svg';
import css from '../Assets/css3.svg';
import js from '../Assets/js-icon.png';
import react from '../Assets/react-icon-22.png';
import jquery from '../Assets/jquery-icon.png';
import sass from '../Assets/sass-icon.webp';
import bootstrap from '../Assets/bootstrap-icon.png';
import tailwind from '../Assets/tailwind-icon.png';
import materialui from '../Assets/material-ui-icon.png';
import pwa from '../Assets/PWA-icon.png';
import node from '../Assets/Node-js.png';
import express from '../Assets/express-js-icon-20.png';
import mysql from '../Assets/mysql-icon.png';
import mongodb from '../Assets/mongodb-icon.png';
import heroku from '../Assets/heroku-logo-2.png';
import git from '../Assets/git-icon.png';
import github from '../Assets/GitHub-Logo.png';
import vscode from '../Assets/vscode.png';
import apis from '../Assets/restAPI-icon.png';
import graphql from '../Assets/graphql-logo.svg';
import apollo from '../Assets/apollo-icon-512x512-xs5t5onq.png';
import mongoose from '../Assets/mongossjs-icon.jpg';
import sequelize from '../Assets/sequelize-logo-png.png';
import handlebars from '../Assets/handlebars.png';
import Button from '@material-ui/core/Button';
import styles from './Resume.module.css';




function Resume() {
  const theme = useTheme();

  const proficienciesStyle = {
    color: theme.palette.secondary.main,
    fontSize: '2rem',
  };

  const logoStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    padding: '5px',
    backgroundColor: theme.palette.primary.main,
    margin: '5px',
    display: 'inline-block',
    textAlign: 'center',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
  };

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
        borderRadius: '1rem',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Button
        variant="contained"
        color="secondary"
        style={{
          fontSize: '1.5rem',
          marginBottom: '1rem',
          color: 'whitesmoke',
        }}
        href={resume}
        download
      >
        My Resume
      </Button>

      <div className="proficiencies"  style={{ textAlign: 'center' }}>
        <h3 style={proficienciesStyle}>Proficiencies</h3>
        <div  className={styles.imagesWrapper}>
        <div className={styles.tooltip} data-title="HTML5">
          <img src={html} alt="HTML5" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="CSS3">
          <img src={css} alt="CSS3" title="CSS3" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="JavaScript">
          <img src={js} alt="JavaScript" title="JavaScript" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="React">
          <img src={react} alt="React" title="React" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="jQuery">
          <img src={jquery} alt="jQuery" title="jQuery" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="Sass">
          <img src={sass} alt="Sass" title="Sass" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="Bootstrap">
          <img src={bootstrap} alt="Bootstrap" title="Bootstrap" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="Tailwind">
          <img src={tailwind} alt="Tailwind" title="Tailwind" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="Material-UI">
          <img src={materialui} alt="Material-UI" title="Material-UI" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="Progressive Web App">
          <img src={pwa} alt="Progressive Web App" title="Progressive Web App" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="Node.js">
          <img src={node} alt="Node.js" title="Node.js" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="Express.js">
          <img src={express} alt="Express.js" title="Express.js" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="MySQL">
          <img src={mysql} alt="MySQL" title="MySQL" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="MongoDB">
          <img src={mongodb} alt="MongoDB" title="MongoDB" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="Heroku">
          <img src={heroku} alt="Heroku" title="Heroku" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="Git">
          <img src={git} alt="Git" title="Git" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="GitHub">
          <img src={github} alt="GitHub" title="GitHub" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="Visual Studio Code">
          <img src={vscode} alt="Visual Studio Code" title="Visual Studio Code" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="REST API">
          <img src={apis} alt="REST API" title="REST API" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="GraphQL">
          <img src={graphql} alt="GraphQL" title="GraphQL" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="Apollo">
          <img src={apollo} alt="Apollo" title="Apollo" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="Mongoose">
          <img src={mongoose} alt="Mongoose" title="Mongoose" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="Sequelize">
          <img src={sequelize} alt="Sequelize" title="Sequelize" style={logoStyle} />
        </div>
        <div className={styles.tooltip} data-title="Handlebars">
          <img src={handlebars} alt="Handlebars" title="Handlebars" style={logoStyle} />
        </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
