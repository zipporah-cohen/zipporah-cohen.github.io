import React from 'react';
import ImageOverlayCard from './ImageOverlayCard';
import thisWebsiteImage from '../assets/website-proj.png';
import bigKnitImage from '../assets/gantry.png';
import genderedLanguageImage from '../assets/senior-poster.png';
import chatroomImage from '../assets/chatroom.png';
import savingFaceImage from '../assets/saving-face.png';
import styles from '../Styles/modules/ProjectsPage.module.css';

const ProjectsPage: React.FC = () => {
  return (
    <>
    <div className="page-header">
      <h1>Projects</h1>
      <p>Here you can find projects I've worked on both individually and with others. Hover over them to see details or give them a click to head to their respective repositories or papers.</p>
    </div>
      <div className={styles.imageCardMenu}>
        <ImageOverlayCard 
          imageSrc={thisWebsiteImage} 
          title='This Website!' 
          subtext='Though certainly a work in progress, this is the place where I demonstrate and practice my current skills, experiment with new ones, and give my professional facade a bit more character.'
          projectURL='https://github.com/zipporah-cohen/zipporah-cohen.github.io'
        />
        <ImageOverlayCard 
          imageSrc={genderedLanguageImage} 
          title='Gendered Language Analysis' 
          subtext='A foray into ML and data science, this project combined my interests in computer science, gender studies, and sexual and reproductive health. This project scrapes Google search results to better understand the use of gendered language in online menstrual resources.'
          projectURL='https://github.com/zipporah-cohen/menstruation-language'
        />
        <ImageOverlayCard 
          imageSrc={chatroomImage} 
          title='Peer to Peer Chatroom' 
          subtext='This project brought together semester of computer networks learning to create a peer-to-peer chat application. It enables users to sign up, login, create chatrooms, and send messages to other entrants.'
          projectURL='https://github.com/zipporah-cohen/chatroom'
        />
        <ImageOverlayCard 
          imageSrc={bigKnitImage} 
          title='Big Knit' 
          subtext='An Arduino-based knitting machine built to knit products of user-specified height and width. Designed with sustainability in mind, it is made of largely repurposed materials and is meant to knit fabric made of recycled T-shirt fabric.'
          projectURL='https://github.com/zipporah-cohen/big-knit'
        />
        <ImageOverlayCard 
          imageSrc={savingFaceImage} 
          title='Saving Face' 
          subtext="Machine Learning mobile application that utilizes users's headphones to detect facetouching behavior. Developed at the beginning of the COVID-19 pandemic, this work aimed to help mitigate the spread of COVID-19 by reducing surface transmission."
          projectURL='https://dl.acm.org/doi/10.1145/3448121'
        />
      </div>
    </>
  );
};

export default ProjectsPage;
