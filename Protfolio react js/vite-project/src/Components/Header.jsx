import React, { useState } from 'react';
import { AppBar, Box, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const StyleHeader = styled(Box)({
    '@media (max-width: 945px)': {
      maxWidth: '89%',
    },
  });

  const StyledNavLink = styled(NavLink)(({ isActive }) => ({
    padding: '1rem',
    color: isActive ? '#B0B0B0' : 'inherit',
    textDecoration: 'none',
    '@media (max-width:460px)': {
      paddingLeft: '.2rem',
      fontSize:'14px'
    },
    '&:hover':{
      color:'wheat'
    }
  }));

  return (
    <StyleHeader>
      <AppBar
        sx={{
          position: 'absolute',
          top: '0',
          background: '#54422F',
          boxShadow: 'none',
          border: '2px solid white',
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '6px',
          display: 'flex',
          justifyContent: 'end',
          maxWidth: '30rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: 'auto',
            marginRight: '1rem',
            fontWeight: 'bold',
          }}
        >
          <StyledNavLink
            to="/about"
            isActive={activeIndex === 0}
            onClick={() => handleClick(0)}
          >
            About
          </StyledNavLink>
          <StyledNavLink
            to="/resume"
            isActive={activeIndex === 1}
            onClick={() => handleClick(1)}
          >
            Resume
          </StyledNavLink>
          <StyledNavLink
            to="/portfolio"
            isActive={activeIndex === 2}
            onClick={() => handleClick(2)}
          >
            Portfolio
          </StyledNavLink>
          <StyledNavLink
            to="/contact"
            isActive={activeIndex === 3}
            onClick={() => handleClick(3)}
          >
            Contact
          </StyledNavLink>
        </Box>
      </AppBar>
    </StyleHeader>
  );
}

export default Header;
