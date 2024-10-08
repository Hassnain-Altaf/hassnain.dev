import React from 'react';
import { Box, Divider, Typography, styled } from '@mui/material';


import ProfileImage from "../../src/assets/Profile-img.jpeg";
import PhoneSvg from "../../src/assets/phone.svg" ;
import CalendarSvg from "../../src/assets/calendar-fold.svg" ;
import MapSvg from "../../src/assets/map-pinned.svg" ;
import FacebookSvg from "../../src/assets/facebook.svg" ;
import MailSvg from "../../src/assets/mail.svg" ;
import  LinkedInSvg  from "../../src/assets/linkedin.svg";
import  GitHubSvg  from "../../src/assets/github.svg";
import  InstagramSvg  from "../../src/assets/instagram.svg";




const facebookApiUrl = import.meta.env.VITE_FACEBOOK_API_URL;
const githubApiUrl = import.meta.env.VITE_GITHUB_API_URL; // Ensure this is the correct full URL
const linkedInApiUrl = import.meta.env.VITE_LINKEDIN_API_URL;

const StyleSideBar = styled(Box)({
   
    background: 'rgb(142, 120, 64);',
    color: 'white',
    border: '2px solid white', 
    borderRadius: '10px',
    maxHeight: '43rem',
    maxWidth: '20%',
    position: 'sticky',
    top: '50px',
    paddingTop: '60px',
    margin: ' 2% 1% 0% 2%',
    boxShadow: '-3px -3px 4px 2px #bcb2b2, 3px 3px 4px 2px #bcb2b2',
    '@media (max-width:953px)': {
        maxHeight: '44rem',
        maxWidth: '21%',
    },
    '@media (max-width:945px)': {
        display:'none'
    },

});


const ProfileContainer = styled(Box)({
    display: 'block',
    width: '130px',
    height: '130px',
    margin:'auto',
    background: '#54422f',
    borderRadius:'20px'
});


const StyleProfileImage = styled('img')({
    width: '90px',
    height: '90px',
    objectFit: 'cover', // Ensure the image covers the container
    objectPosition: 'center center', // Center the image both horizontally and vertically
    borderRadius: '10px',
    margin: '15%',
    transition: 'transform 0.3s ease-in-out', // Add a transition effect for the transform property
    '&:hover': {
        transform: 'scale(1.1)', // Scale up the image on hover
        boxShadow: '-1px -1px 2px 2px #bcb2b2 , 1px 1px 2px 2px #bcb2b2', 
    },
});

const About = styled(Typography)({
    borderRadius: '5px',
    border: '2px solid white',
    background: '#614D32',
    color: 'white',
    marginTop: '2.5rem',
    height: 'fit-content',
    width: 'fit-content',
    margin: '1rem auto',
    padding: '3px 6px',
    fontSize: '12px',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '-2px -2px 5px 1px white, 2px 2px 5px 1px white',
      transition: '0.5s'
    }
  });

const StyledDivider = styled(Divider)({
    backgroundColor: 'white', // Set background color
    marginTop: '2rem', // Adjust top margin
    marginBottom:'1rem'
});

const InfoWrapper = styled(Box)({
    display:'flex',
    justifyContent:'flex-start',
    flexWrap:'wrap',
    alignItems:"center",
    margin:'15px 5px',
})

const ImageBox= styled (Box)({

    borderRadius:'10px',
    border: '2px solid #614D32',
    padding:'6px 8.5px',
    boxShadow: '0px 0px 4px 3px #B8AC7C',
    margin:'10px',
    '&:hover':{
        boxShadow: '0px 0px 5px 1px #614D32 , 0px 0px 5px 1px #614D32', 
        border: '2px solid #B8AC7C',
        transition:'0.5s'
    },
    
  })


  const SoicalMedia = styled('img')({
    height:'1.1rem' , 
    width:'1.1rem'  ,  
    margin:'3px' , 
    borderRadius:'50%',
    border: '2px solid', // Define the border
    borderColor: '#FFFFFF', // Set the border color to white
    padding:'5px',
    fontWeight:'bold',
    cursor:'pointer',
    '&:hover':{
        boxShadow: '-2px -2px 5px 1px #614D32 , 2px 2px 5px 1px #614D32', 
        border: '2px solid #B8AC7C', 
        transition:'0.5s',
        
    },
    
  });


function SideBar() {
  

    return (
        
        <StyleSideBar>
            <ProfileContainer>
                <StyleProfileImage src={ProfileImage} alt="profile" />
            </ProfileContainer>
            <h2 style={{ textAlign:'center' }}>Hassnain Altaf</h2>
            <About title='Web developer'>Web developer</About>
            <StyledDivider variant="middle" />
            
            <Box>

           {/* ============== > 1st < ================= */}
            <InfoWrapper>
            <ImageBox>
              <img src={MailSvg} alt="mail-Icon" style={{  color: 'white' , height:'16px' , width:'16px' ,  }} />
            </ImageBox> 

            <Box>
                <Typography style={{fontSize:'12px'}}>EMAIL</Typography>
                <Box><a href="mailto:Hassnainalvi0@gmail.com" class="contact-link" style={{color:'#dbd7ad' , fontSize:'14px', fontWeight:'bold' , overflow:'hidden'}} >Hassnainalvi0@gmail.com</a>
                </Box>
            </Box>
            </InfoWrapper>

            {/* ============== > 2nd < ================= */}
            <InfoWrapper>
            <ImageBox>
              <img src={PhoneSvg} alt="phone-Icon" style={{  color: 'white' , height:'16px' , width:'16px' , fontWeight:'550' }} />
            </ImageBox> 

            <Box>
                <Typography style={{fontSize:'12px'}}>PHONE</Typography>
                <Box>
                <Typography style={{color:'#dbd7ad' , fontWeight:'550' , fontSize:'15px' }}>+92 305-4337998</Typography>
                {/* <a href="tel:+923054332213" alt="contact-link">+92 305-4332213</a> */}
                </Box>
            </Box>
            </InfoWrapper>

            {/* ========== > 3rd < ============= */}
            <InfoWrapper>
            <ImageBox >
              <img src={CalendarSvg} alt="calendar-Icon" style={{  color: 'white' , height:'16px' , width:'16px' ,   }} />
            </ImageBox> 

            <Box>
                <Typography style={{fontSize:'12px'}}>BIRTHDAY</Typography>
                <Box>
                <time dateTime="2004-06-23" style={{color:'#dbd7ad' , fontWeight:'550'}} >June 23, 2004</time>
                </Box>
            </Box>
            </InfoWrapper>

            {/* ========== > 4th < ============= */}
            <InfoWrapper>
            <ImageBox >
              <img src={MapSvg} alt="locatiom-Icon" style={{  color: 'white' , height:'16px' , width:'16px' ,  }} />
            </ImageBox> 

            <Box>
                <Typography style={{fontSize:'12px'}}>LOCATION</Typography>
                <Box>
                <Typography style={{color:'#dbd7ad' ,fontWeight:'550' , fontSize:'15px' }}>pakistan, Lahore</Typography>
                </Box>
            </Box>
            </InfoWrapper>
            </Box>

            <Box style={{display:'flex' , justifyContent:'center'}} >
            <span > 
       <a href={facebookApiUrl || '#'}  target='_blank'  rel='noopener noreferrer'>   <SoicalMedia src={FacebookSvg} alt="facebook-logo" title='visit-facebook'/> </a>
       </span>
       <span > 
       <a href={linkedInApiUrl || '#'} target='_blank' rel='noopener noreferrer'>   <SoicalMedia src={LinkedInSvg} alt="linkedin-logo" title='visit-linkedin'/> </a>
       </span>
       <span>
       <a href={githubApiUrl || '#'}  target='_blank' rel='noopener noreferrer' >   <SoicalMedia src={GitHubSvg} alt="github-logo" title='visit-github' /> </a>
       </span>
       <span >
           <a href='/'  target='_blank' rel='noopener noreferrer'> <SoicalMedia src={InstagramSvg} alt="insta-logo" title='visit-instagram'/>  </a>
       </span>
            </Box>
        </StyleSideBar>
    );
}

export default SideBar;

