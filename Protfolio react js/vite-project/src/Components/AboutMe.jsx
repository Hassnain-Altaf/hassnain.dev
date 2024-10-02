import React, { useState } from 'react';
import { Box, styled, Typography, Dialog, IconButton , Tooltip } from '@mui/material';
import { DrawOutlined, IntegrationInstructionsOutlined, Dvr, AddAPhotoOutlined, Close} from '@mui/icons-material';

const AboutMeAllComponentsWrapper = styled(Box)({
  '@media (max-width: 945px)': {
    maxWidth: '89%',
  },
});

const StyledAboutMeText = styled('h2')({
  color: 'white',
  padding: '1rem',
  fontSize: '30px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '10px',
    left: '15px',
    width: '7%',
    height: '5px',
    background: 'white',
    borderRadius: '3px',
    boxShadow: '0px 0px 4px 2px #dbd7ad, 0px 0px 4px 2px #dbd7ad',
  },
 
});

const ServicesWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  maxWidth: '100%', 
  '@media (max-width: 943px)': {
    marginLeft: '4rem',
  },
  '@media (max-width: 820px)': {
    margin: '1rem',
    display: 'block',
  },
  
});

const Service = styled(Box)({
  display: 'flex',
  gap: '30px',
  padding: '1rem 1rem',
  maxWidth: '37%',
  borderRadius: '10px',
  border: '2px solid white',
  margin: '1rem',
  background: '#54422F',
  boxShadow: '0px 0px 4px 3px #dbd7ad, 0px 0px 4px 3px #dbd7ad',
  transition: '0.5s',
  '&:hover': {
    transform: 'scale(1.01)',
    boxShadow: '-2px -2px 5px 1px #bcb2b2, 2px 2px 5px 1px #bcb2b2',
  },
  '@media (max-width: 820px)': {
    maxWidth: '90%',
    marginLeft:'8%'
  },
  '@media (max-width:460px)': {
    display:'block'
},
});



const TestimonialsWrapper = styled(Box)({
  display: 'flex',
  flexWrap:'wrap',
  justifyContent:'center',
  maxWidth:'100%',
  '@media (max-width: 943px)': {
    marginLeft: '4rem',
  },
 '@media (max-width: 820px)': {
    margin: '2rem 1rem',
    display: 'block',
  },
  '@media (max-width:460px)': {
    // fontSize:'18px', 
    display:'block'
},
});

const TestimonialItems = styled(Box)({

  padding: '1rem 1rem',
  maxWidth: '37%',
  minWidth:'15%',
  borderRadius: '10px',
  border: '2px solid white',
  margin: '1.5rem 1rem',
  background: '#54422F',
  boxShadow: '0px 0px 4px 3px #dbd7ad, 0px 0px 4px 3px #dbd7ad',
  position: 'relative',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.01)',
    boxShadow: '-2px -2px 5px 1px #bcb2b2 , 2px 2px 5px 1px #bcb2b2', // #0C0EFF
    transition:'0.5s',
  },
  '@media (max-width: 820px)': {
    maxWidth: '90%',
    marginLeft:'8%',
    marginTop:'10%',
  },
  '@media (max-width:460px)': {
    fontSize:'18px', 
},
          '@media (max-width:339px)': {
    fontSize:'13px', 
    marginLeft:'0%',
    marginTop:'20%',
    

}});

const TestimonialName=styled(Typography)({
  position: "absolute",
              top: "1rem",
              left: "7rem",
              fontWeight: "bold",
              '@media (max-width:460px)': {
        fontSize:'18px', 
},
              '@media (max-width:387px)': {
        fontSize:'15px', 
},

})


const CloseButtonStyles = styled(Close)({
  color: 'black',
  border: '1px solid black',
  borderRadius: '10px',
  outline: 'none',
  '&:hover': {
    color: 'red',
    border: '2px solid red'
  },
});

const truncateText = (text) => {
  const words = text.split(' ');
  const truncatedText = words.slice(0, 15).join(' ');
  return truncatedText + (words.length > 15 ? '...' : '');
};

function AboutMe() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const handleOpenDialog = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (

    <AboutMeAllComponentsWrapper>

      <StyledAboutMeText>About Me</StyledAboutMeText>
      <Typography style={{ padding: "0rem 2rem" }}>
        I'm a Developer and UI/UX Designer hailing from Lahore, Pakistan, with
        expertise in web development. I enjoy turning complex problems into
        simple, beautiful, and intuitive designs. <br />
        <br />
        My job is to build your website so that it is functional and
        user-friendly but at the same time attractive. Moreover, I infuse a
        personal touch into every project, ensuring it's not only eye-catching
        but also easy to use. My goal is to convey your message and identity
        through innovative development strategies. <br />
        <br />
        Let's work together to make your digital dreams a reality!
      </Typography>

      <h2 style={{ padding: "1.5rem 2rem" }}>What I'm Doing</h2>

      <ServicesWrapper>
        <Service>
          <Box>
            <DrawOutlined sx={{ fontSize: "2rem", color: "#e8c23b" }} />
          </Box>
          <Box>
            <h4 style={{ marginBottom: "5px", fontWeight: "bold" , marginTop:'1px' }}>
              Web Design
            </h4>
            <Typography style={{ color: "#dbd7ad" }}>
              Our designs are modern and top-quality, showing how professional
              we are.
            </Typography>
          </Box>
        </Service>

        <Service>
          <Box>
            <IntegrationInstructionsOutlined
              sx={{ fontSize: "2rem", color: "#e8c23b" }}
            />
          </Box>
          <Box>
            <h4 style={{ marginBottom: "5px", fontWeight: "bold" , marginTop:'1px' }}>
              Web Development
            </h4>
            <Typography style={{ color: "#dbd7ad" }}>
              We specialize in creating high-quality websites with a
              professional touch.{" "}
            </Typography>
          </Box>
        </Service>

        <Service>
          <Box>
            <Dvr sx={{ fontSize: "2rem", color: "#e8c23b" }} />{" "}
          </Box>
          <Box>
            <h4 style={{ marginBottom: "5px", fontWeight: "bold" , marginTop:'1px' }}>
              Expert in responsive design
            </h4>
            <Typography style={{ color: "#dbd7ad" }}>
              I'm really good at making websites that work well on any device.{" "}
            </Typography>
          </Box>
        </Service>

        <Service>
          <Box>
            <AddAPhotoOutlined sx={{ fontSize: "2rem", color: "#e8c23b" }} />{" "}
          </Box>
          <Box>
            <h4 style={{ marginBottom: "5px", fontWeight: "bold" , marginTop:'1px'}}>
              Photography
            </h4>
            <Typography style={{ color: "#dbd7ad" }}>
              I make high-quality photos of any category at a professional
              level.{" "}
            </Typography>
          </Box>
        </Service>
      </ServicesWrapper>

      <h2 style={{ padding: "1rem 2rem" }}>Testimonials</h2>

      <TestimonialsWrapper>

      
      <Tooltip
  title="click to see more detail"
  PopperProps={{
    popperOptions: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, -25], // Adjust the margin as needed
          },
        },
      ],
    },
  }}
  placement="top"
>
        <TestimonialItems
          onClick={() =>
            handleOpenDialog({
              name: "Saqib",
              content:
                "Hassnain was hired to create a gym website. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.",
            })
          }

          style={{ '& : hover ': {
            transform: 'scale(1.1)', // Scale up the image on hover
            boxShadow: '-2px -2px 3px 3px red , 2px 2px 3px 3px red', 
          }}}
        >
          <Box
            style={{
              position: "absolute", top: "-2rem", left: "2rem", height: "4.5rem", width: "4.5rem",
              background: "#54422F", border: "2px solid #BCB2B2", borderRadius: "10px",  }} >
            
            <img src="../../src/assets/Saqib.PNG" alt="Saqib-image" width="100px" height="100px"
              style={{
                padding: "9px", height: "75%", maxWidth: "75%", objectFit: "cover", objectPosition: "center center",
              }}
            />
          </Box>
          <TestimonialName
            variant="h6">
            Saqib
          </TestimonialName>
          <Box>
            <Typography
              variant="body1"
              style={{ marginTop: "2rem", color: "#dbd7ad" }}
            >
              {truncateText(
                "Hassnain was hired to create a gym website . We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client."
              )}
            </Typography>
          </Box>
        </TestimonialItems> 
        </Tooltip>

        
        <Tooltip
  title="click to see more detail"
  PopperProps={{
    popperOptions: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, -25], // Adjust the margin as needed
          },
        },
      ],
    },
  }}
  placement="top"
>
        <TestimonialItems
          onClick={() =>
            handleOpenDialog({
              name: "Rubab",
              content:
                "Hassnain was hired to create a Mediox website. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.",
            })
          }
        >
          <Box
            style={{
              position: "absolute",
              top: "-2rem",
              left: "2rem",
              height: "4.5rem",
              width: "4.5rem",
              background: "#54422F",
              border: "2px solid #BCB2B2",
              borderRadius: "10px",
            }}
          >
            <img
              src="../../src/assets/Rubab.jpg"
              alt="Rubab-image"
              width="100px"
              height="100px"
              style={{
                padding: "9px",
                height: "75%",
                maxWidth: "75%",
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </Box>
          <TestimonialName
            variant="h6"
         
          >
            Rubab
          </TestimonialName>
          <Box>
            <Typography
              variant="body1"
              style={{ marginTop: "2rem", color: "#dbd7ad" }}
            >
              {truncateText(
                "Hassnain was hired to create a Mediox website. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client."
              )}
            </Typography>
          </Box>
        </TestimonialItems> 
        </Tooltip>

        
        <Tooltip
  title="click to see more detail"
  PopperProps={{
    popperOptions: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, -25], // Adjust the margin as needed
          },
        },
      ],
    },
  }}
  placement="top"
>
        <TestimonialItems
          onClick={() =>
            handleOpenDialog({
              name: "Alina",
              content:
              "Hassnain was hired to create a 4x4 Tic Tac Toe We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.",
            })
          }
        >
          <Box
            style={{
              position: "absolute",
              top: "-2rem",
              left: "2rem",
              height: "4.5rem",
              width: "4.5rem",
              background: "#54422F",
              border: "2px solid #BCB2B2",
              borderRadius: "10px",
            }}
          >
            <img
              src="../../src/assets/Alina.jpg"
              alt="Alina-image"
              width="100px"
              height="100px"
              style={{
                padding: "9px",
                height: "75%",
                maxWidth: "75%",
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </Box>
          <TestimonialName
            variant="h6"
       
          >
            Alina
          </TestimonialName>
          <Box>
            <Typography
              variant="body1"
              style={{ marginTop: "2rem", color: "#dbd7ad" }}
            >
              {truncateText(
                "Hassnain was hired to create a 4x4 Tic Tac Toe. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client."
              )}
            </Typography>
          </Box>
        </TestimonialItems> 
        </Tooltip>

        <Tooltip
  title="click to see more detail"
  PopperProps={{
    popperOptions: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, -25], // Adjust the margin as needed
          },
        },
      ],
    },
  }}
  placement="top"
>
        <TestimonialItems
          onClick={() =>
            handleOpenDialog({
              name: "Hafiz Furqan ",
              content:
                "Hassnain was hired  as a intern. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.",
            })
          }
        >
          <Box
            style={{
              position: "absolute",
              top: "-2rem",
              left: "2rem",
              height: "4.5rem",
              width: "4.5rem",
              background: "#54422F",
              border: "2px solid #BCB2B2",
              borderRadius: "10px",
            }}
          >
            <img
              src="../../src/assets/Hafiz-Furqan.jpg"
              alt="Hafiz-Furaqn-image"
              width="100px"
              height="100px"
              style={{
                padding: "9px",
                height: "75%",
                maxWidth: "75%",
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </Box>
          <TestimonialName
            variant="h6"
          >
            Hafiz Furqan
          </TestimonialName>
          <Box>
            <Typography
              variant="body1"
              style={{ marginTop: "2rem", color: "#dbd7ad" }}
            >
              {truncateText(
                "Hassnain was hired as a intern. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client."
              )}
            </Typography>
          </Box>
        </TestimonialItems>
         </Tooltip>

        {/* Repeat TestimonialItems for other testimonials */}
      </TestimonialsWrapper>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          sx: { borderRadius: "20px", border: "3px solid #e8c23b" },
        }}
      >
        <Box style={{ padding: "2rem", background: "#54422F", color: "black" , }}>
          <IconButton
            style={{ position: "absolute", top: "1rem", right: "1rem" }}
            onClick={handleCloseDialog}
          >
            <CloseButtonStyles />
          </IconButton>
          <Typography variant="h6" style={{ fontWeight: "bold" , color:'white' }}>
            {selectedTestimonial && selectedTestimonial.name}
          </Typography>
          <time datetime="2024-06-14" style={{color:'white'}}>14 June, 2024</time>

          <Typography variant="body1" style={{ padding: "10px" , color:'#dbd7ad'}}>
            {selectedTestimonial && selectedTestimonial.content}
          </Typography>
        </Box>
      </Dialog>

    </AboutMeAllComponentsWrapper>
  );
}

export default AboutMe;
