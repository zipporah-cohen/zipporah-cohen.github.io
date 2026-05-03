import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import { Outlet } from 'react-router';

const ContentPane: React.FC = () => {
  
  return (
    <>
      <Nav />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default ContentPane;
