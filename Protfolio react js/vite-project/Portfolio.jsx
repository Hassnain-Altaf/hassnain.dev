// import React, { useState } from 'react';
// import { Box , styled  , List, ListItem, IconButton, Typography} from '@mui/material';
// import Link from '@mui/joy/Link';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


// const StyleProtfolio = styled('h2')({
//   color: 'white',
//   padding: '0rem 1rem',
//   fontSize: '30px',
//   position: 'relative',
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     bottom: '-10px',
//     left: '16px',
//     width: '7%',
//     height: '5px',
//     background: '#bcb2b2',
//     borderRadius: '3px',
//     boxShadow: '-2px -2px 6px 3px #373738, 2px 2px 6px 3px #373738',
//   }
//   });



//   const styledListItem =styled(ListItem)({
//     display:'flex',

//   })
// function Protfolio() {
//   const handleLinkClick = (event) => {
//     event.preventDefault(); // Prevent the default behavior of the link
//     // Add custom logic here if needed
//   };

  
//   function handleHover(event) {
//     event.target.style.transition = 'color 0.2s ease-in-out';
//   }
  
//   function handleMouseOut(event) {
//     event.target.style.transition = 'color 0.2s ease-in-out';
//   }
  
  
//   const [activeLink, setActiveLink] = useState('all');


//   const [liked, setLiked] = useState(false);

//   const toggleLike = () => {
//     setLiked(!liked);
//   };


//   return (
//     <>
//       <StyleProtfolio>Portfolio</StyleProtfolio>
//     <Box>
    
//     <List component="nav" style={{display:'flex' , marginLeft:'1rem'}} >

//     <ListItem style={{width:'fit-content'}}>
        
//         <Link to="#basics"   style={{
//           textDecoration: 'none',
//           color: activeLink === 'all' ? 'white' : '#BCB2B2',
//         }}
//         onClick={() => setActiveLink('all')}
//         onMouseEnter={handleHover}
//         onMouseLeave={handleMouseOut} >All</Link>
    
//     </ListItem>

//       <ListItem style={{width:'fit-content'}}>
//         <Link to="#Web design" style={{
//           textDecoration: 'none',
//           color: activeLink === 'Web design' ? 'white' : '#BCB2B2',
//         }}
//         onClick={() => setActiveLink('Web design')} onMouseEnter={handleHover}
//         onMouseLeave={handleMouseOut} >Web design</Link>
//       </ListItem>
//       <ListItem style={{width:'fit-content'}}>
//         <Link to="#Applications" style={{
//           textDecoration: 'none',
//           color: activeLink === 'Applications' ? 'white' : '#BCB2B2',
//         }}
//         onClick={() => setActiveLink('Applications')} onMouseEnter={handleHover}
//       onMouseLeave={handleMouseOut}  >Applications</Link>
//       </ListItem>
//       <ListItem style={{width:'fit-content'}}>
//         <Link to="#Web development" style={{
//           textDecoration: 'none',
//           color: activeLink === 'Web development' ? 'white' : '#BCB2B2',
//         }}
//         onClick={() => setActiveLink('Web development')} onMouseEnter={handleHover}
//       onMouseLeave={handleMouseOut}  >Web development</Link>
//       </ListItem>
//     </List>

//     </Box>

//     <Box sx={{ display: 'flex', flexWrap: 'wrap',  justifyContent:'center'  , gap:' 50px 15px' , margin:' 40px 10px' }} >

//   <box>
//     <Box
//       sx={{
//         position: 'relative',
//         height: '210px',
//         width: '250px',
//         borderRadius: '10px',
//         border: '1px solid white',
//         // margin: '1rem',
//         padding: '1rem',
//         overflow: 'hidden',
//         '&:hover .overlay': {
//           opacity: 1,
//         },
//         '&:hover .image': {
//           transform: 'scale(1.1)',
//         },
//       }}
//     >
//       <img
//         src="Netflix.png"
//         alt="netflix"
//         className="image"
//         style={{
//           height: '100%',
//           width: '100%',
//           objectFit: 'cover',
//           objectPosition: 'center',
//           transition: 'transform 0.3s ease-in-out',
//         }}
//       />
//       <Box
//         className="overlay"
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           height: '100%',
//           width: '100%',
//           background: 'rgba(0, 0, 0, 0.4)',
//           opacity: 0,
//           transition: 'opacity 0.3s ease-in-out',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <IconButton
//           onClick={toggleLike}
//           sx={{
//             width: '40px',
//             height: '40px',
//             backgroundColor: 'white',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             borderRadius: '50%',
//             transition: 'background-color 0.3s ease-in-out',
//             '&:hover': {
//               backgroundColor: 'lightgray',
//             },
//           }}
//         >
//           {liked ? (
//             <FavoriteIcon style={{ color: 'red', fontSize: '24px' }} />
//           ) : (
//             <FavoriteBorderIcon style={{ color: 'gray', fontSize: '24px' }} />
//           )}
//         </IconButton>
     
//       </Box>

//     </Box>
//       <h4 style={{margin:'5px'}}>Netflix</h4>
//       <Typography style={{margin:'5px'}}>Web design</Typography>
//     </box> 


//     {/* ===> 2 < ==== */}

//    <Box>
//     <Box
//       sx={{
//         position: 'relative',
//         height: '210px',
//         width: '250px',
//         borderRadius: '10px',
//         border: '1px solid white',
//         // margin: '1rem',
//         padding: '1rem',
//         overflow: 'hidden',
//         '&:hover .overlay': {
//           opacity: 1,
//         },
//         '&:hover .image': {
//           transform: 'scale(1.1)',
//         },
//       }}
//     >
//       <img
//         src="Materialize.PNG"
//         alt="netflix"
//         className="image"
//         style={{
//           height: '100%',
//           width: '100%',
//           objectFit: 'cover',
//           objectPosition: 'center',
//           transition: 'transform 0.3s ease-in-out',
//         }}
//       />
//       <Box
//         className="overlay"
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           height: '100%',
//           width: '100%',
//           background: 'rgba(0, 0, 0, 0.4)',
//           opacity: 0,
//           transition: 'opacity 0.3s ease-in-out',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <IconButton
//           onClick={toggleLike}
//           sx={{
//             width: '40px',
//             height: '40px',
//             backgroundColor: 'white',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             borderRadius: '50%',
//             transition: 'background-color 0.3s ease-in-out',
//             '&:hover': {
//               backgroundColor: 'lightgray',
//             },
//           }}
//         >
//           {liked ? (
//             <FavoriteIcon style={{ color: 'red', fontSize: '24px' }} />
//           ) : (
//             <FavoriteBorderIcon style={{ color: 'gray', fontSize: '24px' }} />
//           )}
//         </IconButton>
//       </Box>
//     </Box>
//     <h4 style={{margin:'5px'}}>Materialize</h4>
//       <Typography style={{margin:'5px'}}>Web development</Typography>
//       </Box>


//     {/* ============= > 3 <================= */}

//     <Box>
//     <Box
//       sx={{
//         position: 'relative',
//         height: '210px',
//         width: '250px',
//         borderRadius: '10px',
//         border: '1px solid white',
//         // margin: '1rem',
//         padding: '1rem',
//         overflow: 'hidden',
//         '&:hover .overlay': {
//           opacity: 1,
//         },
//         '&:hover .image': {
//           transform: 'scale(1.1)',
//         },
//       }}
//     >
//       <img
//         src="Social-website.png"
//         alt="netflix"
//         className="image"
//         style={{
//           height: '100%',
//           width: '100%',
//           objectFit: 'cover',
//           objectPosition: 'center',
//           transition: 'transform 0.3s ease-in-out',
//         }}
//       />
//       <Box
//         className="overlay"
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           height: '100%',
//           width: '100%',
//           background: 'rgba(0, 0, 0, 0.4)',
//           opacity: 0,
//           transition: 'opacity 0.3s ease-in-out',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <IconButton
//           onClick={toggleLike}
//           sx={{
//             width: '40px',
//             height: '40px',
//             backgroundColor: 'white',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             borderRadius: '50%',
//             transition: 'background-color 0.3s ease-in-out',
//             '&:hover': {
//               backgroundColor: 'lightgray',
//             },
//           }}
//         >
//           {liked ? (
//             <FavoriteIcon style={{ color: 'red', fontSize: '24px' }} />
//           ) : (
//             <FavoriteBorderIcon style={{ color: 'gray', fontSize: '24px' }} />
//           )}
//         </IconButton>
//       </Box>
//     </Box>
//     <h4 style={{margin:'5px'}}>Mediox</h4>
//       <Typography style={{margin:'5px'}}>Web design</Typography>
//     </Box>  



//     {/* ============== >  4 < ================= */}

//     <Box>
//     <Box
//       sx={{
//         position: 'relative',
//         height: '210px',
//         width: '250px',
//         borderRadius: '10px',
//         border: '1px solid white',
//         // margin: '1rem',
//         padding: '1rem',
//         overflow: 'hidden',
//         '&:hover .overlay': {
//           opacity: 1,
//         },
//         '&:hover .image': {
//           transform: 'scale(1.1)',
//         },
//       }}
//     >
//       <img
//         src="Netflix.png"
//         alt="netflix"
//         className="image"
//         style={{
//           height: '100%',
//           width: '100%',
//           objectFit: 'cover',
//           objectPosition: 'center',
//           transition: 'transform 0.3s ease-in-out',
//         }}
//       />
//       <Box
//         className="overlay"
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           height: '100%',
//           width: '100%',
//           background: 'rgba(0, 0, 0, 0.4)',
//           opacity: 0,
//           transition: 'opacity 0.3s ease-in-out',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <IconButton
//           onClick={toggleLike}
//           sx={{
//             width: '40px',
//             height: '40px',
//             backgroundColor: 'white',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             borderRadius: '50%',
//             transition: 'background-color 0.3s ease-in-out',
//             '&:hover': {
//               backgroundColor: 'lightgray',
//             },
//           }}
//         >
//           {liked ? (
//             <FavoriteIcon style={{ color: 'red', fontSize: '24px' }} />
//           ) : (
//             <FavoriteBorderIcon style={{ color: 'gray', fontSize: '24px' }} />
//           )}
//         </IconButton>
//       </Box>
//     </Box>

//     <h4 style={{margin:'5px'}}>Netflix</h4>
//       <Typography style={{margin:'5px'}}>Web design</Typography>
//     </Box>  

//     {/* =========================== > 5 < ===================== */}

//     <Box>
//     <Box
//       sx={{
//         position: 'relative',
//         height: '210px',
//         width: '250px',
//         borderRadius: '10px',
//         border: '1px solid white',
//         // margin: '1rem',
//         padding: '1rem',
//         overflow: 'hidden',
//         '&:hover .overlay': {
//           opacity: 1,
//         },
//         '&:hover .image': {
//           transform: 'scale(1.1)',
//         },
//       }}
//     >
//       <img
//         src="Netflix.png"
//         alt="netflix"
//         className="image"
//         style={{
//           height: '100%',
//           width: '100%',
//           objectFit: 'cover',
//           objectPosition: 'center',
//           transition: 'transform 0.3s ease-in-out',
//         }}
//       />
//       <Box
//         className="overlay"
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           height: '100%',
//           width: '100%',
//           background: 'rgba(0, 0, 0, 0.4)',
//           opacity: 0,
//           transition: 'opacity 0.3s ease-in-out',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <IconButton
//           onClick={toggleLike}
//           sx={{
//             width: '40px',
//             height: '40px',
//             backgroundColor: 'white',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             borderRadius: '50%',
//             transition: 'background-color 0.3s ease-in-out',
//             '&:hover': {
//               backgroundColor: 'lightgray',
//             },
//           }}
//         >
//           {liked ? (
//             <FavoriteIcon style={{ color: 'red', fontSize: '24px' }} />
//           ) : (
//             <FavoriteBorderIcon style={{ color: 'gray', fontSize: '24px' }} />
//           )}
//         </IconButton>
//       </Box>
//     </Box>
//     <h4 style={{margin:'5px'}}>Netflix</h4>
//       <Typography style={{margin:'5px'}}>Web design</Typography>
//     </Box>

//     {/* ================ > 6 < ==================== */}

//     <Box>
//     <Box
//       sx={{
//         position: 'relative',
//         height: '210px',
//         width: '250px',
//         borderRadius: '10px',
//         border: '1px solid white',
//         // margin: '1rem',
//         padding: '1rem',
//         overflow: 'hidden',
//         '&:hover .overlay': {
//           opacity: 1,
//         },
//         '&:hover .image': {
//           transform: 'scale(1.1)',
//         },
//       }}
//     >
//       <img
//         src="Netflix.png"
//         alt="netflix"
//         className="image"
//         style={{
//           height: '100%',
//           width: '100%',
//           objectFit: 'cover',
//           objectPosition: 'center',
//           transition: 'transform 0.3s ease-in-out',
//         }}
//       />
//       <Box
//         className="overlay"
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           height: '100%',
//           width: '100%',
//           background: 'rgba(0, 0, 0, 0.4)',
//           opacity: 0,
//           transition: 'opacity 0.3s ease-in-out',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <IconButton
//           onClick={toggleLike}
//           sx={{
//             width: '40px',
//             height: '40px',
//             backgroundColor: 'white',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             borderRadius: '50%',
//             transition: 'background-color 0.3s ease-in-out',
//             '&:hover': {
//               backgroundColor: 'lightgray',
//             },
//           }}
//         >
//           {liked ? (
//             <FavoriteIcon style={{ color: 'red', fontSize: '24px' }} />
//           ) : (
//             <FavoriteBorderIcon style={{ color: 'gray', fontSize: '24px' }} />
//           )}
//         </IconButton>
//       </Box>
//     </Box>
//     <h4 style={{margin:'5px'}}>Netflix </h4>
//       <Typography style={{margin:'5px'}}>Web design</Typography>
//      </Box>


//     </Box>
//     </>
//   )
// }

// export default Protfolio




import React, { useState } from 'react';
import { Box, styled, List, ListItem, IconButton, Typography } from '@mui/material';
import Link from '@mui/joy/Link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
    background: '#bcb2b2',
    borderRadius: '3px',
    boxShadow: '-2px -2px 6px 3px #373738, 2px 2px 6px 3px #373738',
  },
});

const StyledListItem = styled(ListItem)({
  display: 'flex',
});

const portfolioItems = [
  { id: 1, title: 'Netflix', category: 'Web design', src: '../../src/assets/Netflix.png' },
  { id: 2, title: 'Materialize', category: 'Web development', src: '../../src/assets/Materialize.PNG' },
  { id: 3, title: 'Mediox', category: 'Web design', src: '../../src/assets/Social-website.png' },
  { id: 4, title: 'Netflix', category: 'Web design', src: '../../src/assets/Netflix.png' },
  { id: 5, title: 'Netflix', category: 'Web design', src: '../../src/assets/Netflix.png' },
  { id: 6, title: 'Netflix', category: 'Web design', src: '../../src/assets/Netflix.png' },
];

function Portfolio() {
  const [activeLink, setActiveLink] = useState('all');
  const [liked, setLiked] = useState(false);

  const handleLinkClick = (event, link) => {
    event.preventDefault();
    setActiveLink(link); // update value of "activeLink"
  };


//   Purpose:
// The toggleLike function is used to handle the "like" functionality of the portfolio items.
// When a user clicks the like button, this function toggles the liked state between true and false.
// setLiked(!liked); toggles the value of liked. If liked is true, it sets it to false, and vice versa.
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
        <List component="nav" style={{ display: 'flex', marginLeft: '1rem' }}>
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

      <Box sx={{ display: 'flex', flexWrap: 'wrap',  gap: '50px 15px', margin: '40px 10px' }}>
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
            <h4 style={{ margin: '5px' }}>{item.title}</h4>
            <Typography style={{ margin: '5px' }}>{item.category}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Portfolio;
