import React from 'react';
import about from '../../image/about.jpg'
import styled from './About.module.css';

const About = () => {
  return (
    <div className={styled.containerAbout}>
      <h1>TEAMS</h1>
      <img className={styled.imageAbout} src={about} alt='about' />
      <div className={styled.titleAbout} >
        <p>INSTINTO</p>
        <p>SABIDURIA</p>
        <p>VALOR</p>
      </div>
    </div>
  );
}

export default About;
