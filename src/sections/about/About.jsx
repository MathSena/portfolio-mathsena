import React from 'react';
import AboutImage from '../../assets/about.jpg';
import CV from '../../assets/cv.pdf';
import { HiDownload } from 'react-icons/hi';
import cardData from './cardData';
import introData from './introData';
import Card from '../../components/Card';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="Matheus Sena" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {cardData.map(item => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          {introData.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
