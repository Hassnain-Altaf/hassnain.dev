import React, { useState } from 'react';
import { Box, styled, List, ListItem, IconButton, Typography } from '@mui/material';
import Link from '@mui/joy/Link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NetflixImage from '../assets/Netflix.png'; // Adjust this path according to your folder structure
import MaterializeImage from '../assets/Materialize.PNG';
import MedioxImage from '../assets/Social-website.png';
import TicTacToeImage from '../assets/Tic-tac-toe.jpg';
import GymImage from '../assets/gym.png';

const StylePortfolio = styled('h2')({
  color: 'white',
  padding: '0rem 1rem',
  fontSize: '30px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '16px',
    width: '7%',
    height: '5px',
    background: 'white',
    borderRadius: '3px',
    boxShadow: '0px 0px 4px 2px #dbd7ad, 0px 0px 4px 2px #dbd7ad',
  },
});

const StyledListItem = styled(ListItem)( {
  display: 'flex',
});

const portfolioItems = [
  { id: 1, title: 'Netflix', category: 'Web design', src: NetflixImage },
  { id: 2, title: 'Materialize', category: 'Web development', src: MaterializeImage },
  { id: 3, title: 'Mediox', category: 'Web design', src: MedioxImage },
  { id: 4, title: '4x4 Tic Tac Toe', category: 'Web development', src: TicTacToeImage },
  { id: 5, title: 'Gym', category: 'Applications', src: GymImage },
  { id: 6, title: 'Netflix', category: 'Applications', src: NetflixImage },
];

function Portfolio() {
  const [activeLink, setActiveLink] = useState('all');
  const [liked, setLiked] = useState(false);

  const handleLinkClick = (event, link) => {
    event.preventDefault();
    setActiveLink(link);
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  const filteredItems = activeLink === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeLink);

  return (
    <>
      <StylePortfolio>Portfolio</StylePortfolio>
      <Box>
        <List component="nav" style={{ display: 'flex', marginLeft: '1rem', flexWrap: 'wrap' }}>
          <StyledListItem style={{ width: 'fit-content' }}>
            <Link
              to="#all"
              style={{
                textDecoration: 'none',
                color: activeLink === 'all' ? 'white' : '#BCB2B2',
              }}
              onClick={(e) => handleLinkClick(e, 'all')}
            >
              All
            </Link>
          </StyledListItem>
          <StyledListItem style={{ width: 'fit-content' }}>
            <Link
              to="#Web design"
              style={{
                textDecoration: 'none',
                color: activeLink === 'Web design' ? 'white' : '#BCB2B2',
              }}
              onClick={(e) => handleLinkClick(e, 'Web design')}
            >
              Web design
            </Link>
          </StyledListItem>
          <StyledListItem style={{ width: 'fit-content' }}>
            <Link
              to="#Applications"
              style={{
                textDecoration: 'none',
                color: activeLink === 'Applications' ? 'white' : '#BCB2B2',
              }}
              onClick={(e) => handleLinkClick(e, 'Applications')}
            >
              Applications
            </Link>
          </StyledListItem>
          <StyledListItem style={{ width: 'fit-content' }}>
            <Link
              to="#Web development"
              style={{
                textDecoration: 'none',
                color: activeLink === 'Web development' ? 'white' : '#BCB2B2',
              }}
              onClick={(e) => handleLinkClick(e, 'Web development')}
            >
              Web development
            </Link>
          </StyledListItem>
        </List>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '50px 15px', margin: '40px 10px' }}>
        {filteredItems.map((item) => (
          <Box key={item.id}>
            <Box
              sx={{
                position: 'relative',
                height: '210px',
                width: '250px',
                borderRadius: '10px',
                border: '1px solid white',
                padding: '1rem',
                overflow: 'hidden',
                '&:hover .overlay': {
                  opacity: 1,
                },
                '&:hover .image': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="image"
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: '100%',
                  background: 'rgba(0, 0, 0, 0.4)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <IconButton
                  onClick={toggleLike}
                  sx={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    transition: 'background-color 0.3s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'lightgray',
                    },
                  }}
                >
                  {liked ? (
                    <FavoriteIcon style={{ color: 'red', fontSize: '24px' }} />
                  ) : (
                    <FavoriteBorderIcon style={{ color: 'gray', fontSize: '24px' }} />
                  )}
                </IconButton>
              </Box>
            </Box>
            <h4 style={{ margin: '5px', color: '#E8C23B' }}>{item.title}</h4>
            <Typography style={{ margin: '5px', color: '#dbd7ad' }}>{item.category}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Portfolio;
