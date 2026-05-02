import React from 'react';
import { useTheme } from '@mui/material';
import headshot from '../assets/Headshot.jpg';
import '../Styles/styles.css';

const HomePage: React.FC = () => {
  
  const { palette } = useTheme();

  return (
    <div className="home-page">
      <div className="text-item">
        <h1>Hey there!</h1>
        My name is Zipporah Cohen, and I’m a software engineer, hobby bicyclist, and avid cook. Welcome to my workspace!
        <br /><br />
        I’m currently a full-time software engineer doing fullstack web development. 
        This website is the place where I practice skills, learn new ones, and labor over minute CSS tweaks.
        <br /><br />
        After growing up in Minnesota, I moved out East for college. I graduated from Wellesley College Summa Cum Laude where I studied Computer Science and Philosophy, 
        though French very nearly made the cut.
        After graduation, I cultivated a lovely home and community in Chicago, IL before giving West Coast life a go. 
        I currently live in the Bay Area, where I put my certified sommelier skills to work, spend (responsible) time in the sun, and eat seasonal produce.
        When I’m not cooking and biking, I might be chipping away at my bookshelf, in the pottery studio, 
        or tending to my plants.
        <br /><br />
        Click around to get to know me, see some of my projects, and learn about what I've been up to!
      </div>
      <div className='image-container'>
        <img 
          style={{border: "palette.primary.main"}} 
          className='image'
          src={headshot}
        />
      </div>
    </div>
  );
};

export default HomePage;
