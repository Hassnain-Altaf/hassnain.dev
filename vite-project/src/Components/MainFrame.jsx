import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';


const Wrapper = styled(Box)({
    background: '#8E7840',
    color: 'white',
    border: '2px solid white',
    borderRadius: '10px',
    // minHeight: '78rem',
    minHeight: '60%',
    // maxHeight: '79rem',
    maxHeight: '80%',
    // minWidth: '57rem',
    minWidth: '68%',
    // maxWidth: '57rem',
    maxWidth: '69%',
    
    // width: '69%',
    marginTop: '3rem',
    position: 'sticky',
    top: '3rem',
    paddingTop: '60px',
    boxShadow: '-1px -1px 2px 2px #bcb2b2, 1px 1px 2px 2px #bcb2b2',
    '@media (max-width: 945px)': {
      maxWidth: '90%',
      minWidth:'89%'
    },
});

function MainFrame() {
  return (
      <Wrapper>
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
      </Wrapper>
  );
}

export default MainFrame;
