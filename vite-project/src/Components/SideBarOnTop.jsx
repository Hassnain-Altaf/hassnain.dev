
import React, { useState } from 'react';
import { Box, Divider, Typography, styled } from '@mui/material';


import ProfileImage from "../../src/assets/Profile-img.jpeg";
import PhoneSvg from "../../src/assets/phone.svg" ;
import CalendarSvg from "../../src/assets/calendar-fold.svg" ;
import MapSvg from "../../src/assets/map-pinned.svg" ;
import MailSvg from "../../src/assets/mail.svg" ;
import  GitHubSvg  from "../../src/assets/github.svg";
import  LinkedInSvg  from "../../src/assets/linkedin.svg";
import  InstagramSvg  from "../../src/assets/instagram.svg";
import FacebookSvg from "../../src/assets/facebook.svg" ;

// Environment Variables
const facebookApiUrl = import.meta.env.VITE_FACEBOOK_API_URL;
const githubApiUrl = import.meta.env.VITE_GITHUB_API_URL; // Ensure this is the correct full URL
const linkedInApiUrl = import.meta.env.VITE_LINKEDIN_API_URL;

const ProfileContainer = styled(Box)({
  display: 'block',
  width: '130px',
  height: '130px',
  margin: 'auto',
  background: '#614D32',
  borderRadius: '20px'
});

const StyleProfileImage = styled('img')({
  width: '90px',
  height: '90px',
  objectFit: 'cover',
  objectPosition: 'center center',
  borderRadius: '10px',
  margin: '15%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '-1px -1px 2px 2px #bcb2b2, 1px 1px 2px 2px #bcb2b2'
  }
});
const StyleWrapper = styled(Box)({
  width: '89%',
  height:'auto',
  padding:'1%',
  margin: '5% 0% -3% 0%',
  border: '2px solid white',
  borderRadius: '10px',
  position: 'relative', 
  background: '#8E7840',
  display:'flex',
  justifyContent:'left',
  boxShadow: '-3px -3px 4px 2px #bcb2b2, 3px 3px 4px 2px #bcb2b2',
 
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

const TopRightBottomLeftBorderBox = styled(Box)({
  position: 'absolute',
  top: '0',
  right: '0',
  border: '2px solid #8E7840', // Light white color border
  borderTopRightRadius: '10px', // Rounded top-right corner
  borderBottomLeftRadius: '10px', // Rounded bottom-left corner
  padding: '5px', // Adjust padding as needed
  boxShadow: 'inset 0 0 10px #614D32', // Inset shadow
  color: 'white',
  background:'#8E7840',
  '&:hover': {
    cursor: 'pointer'
  }
});

const ProfileSection = styled(Box)({
  display: 'flex',
  gap: '15px',
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
      boxShadow: '-2px -2px 5px 1px #614D32 , 2px 2px 5px 1px #614D32', 
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

const H2 =styled(Typography)({
textAlign: 'center', 
color: 'white' , 
fontSize:'1.5rem', 
marginTop:'3rem',
'@media (max-width:460px)': {
        fontSize:'18px', 
        marginTop:'3rem'
}});

function SideBarOnTop() {

  const [Value , SetValue] = useState(false);
  return (
    <>

    <StyleWrapper>

      <ProfileSection>
        <ProfileContainer>
          <StyleProfileImage src={ProfileImage} alt="profile-image" />
        </ProfileContainer>
        
        <Box>
          <H2>Hassnain Altaf</H2>
          <About title='Web developer'>Web developer</About>
        </Box>
      </ProfileSection>

      <Box>
        <TopRightBottomLeftBorderBox onClick={()=>{SetValue(!Value)}}>show Contacts</TopRightBottomLeftBorderBox>
      </Box>
   
      
    </StyleWrapper>

  
  { Value &&  ( <Box style={{border:'2px solid white' , width:'90.5%' , borderRadius:'10px' , background:'#8E7840' , marginTop:'1rem'}}>
    <hr style={{margin:'2rem 3rem' , color:'#CEC5AD' }}></hr>
  {/* ============== > 1st < ================= */}
   <InfoWrapper>
   <ImageBox>
     <img src={MailSvg} alt="mail-Icon" style={{  color: 'white' , height:'16px' , width:'16px' ,  }} />
   </ImageBox> 

   <Box>
       <Typography style={{fontSize:'12px' , color:'white'}}>EMAIL</Typography>
       <Box><a href="mailto:hassnainalvi0@gmail.com" class="contact-link" style={{color:'#C3BA8C' , fontSize:'14px', fontWeight:'bold' , overflow:'hidden'}} >Hassnainalvi0@gmail.com</a>
       </Box>
   </Box>
   </InfoWrapper>
{/* ============== > 2nd < ================= */}
<InfoWrapper>
   <ImageBox>
     <img src={PhoneSvg} alt="phone-Icon" style={{  color: 'white' , height:'16px' , width:'16px' , fontWeight:'550' }} />
   </ImageBox> 

   <Box>
       <Typography style={{fontSize:'12px' , color:'white'}}>PHONE</Typography>
       <Box>
       <Typography style={{color:'#C3BA8C' , fontWeight:'550' , fontSize:'15px' }}>+92 305-4337998</Typography>
       {/* <a href="tel:+923054332213" alt="contact-link">+92 305-4332213</a> */}
       </Box>
   </Box>
   </InfoWrapper>

   {/* ========== > 3rd < ============= */}
   <InfoWrapper>
   <ImageBox >
     <img src={CalendarSvg} alt="calendar-Icon" style={{ color: 'white' , height:'16px' , width:'16px' ,   }} />
   </ImageBox> 

   <Box>
       <Typography style={{fontSize:'12px' , color:'white'}}>BIRTHDAY</Typography>
       <Box>
       <time dateTime="2004-06-23" style={{color:'#C3BA8C' , fontWeight:'550'}} >June 23, 2004</time>
       </Box>
   </Box>
   </InfoWrapper>

   {/* ========== > 4th < ============= */}
   <InfoWrapper>
   <ImageBox >
     <img src={MapSvg} alt="locatiom-Icon" style={{  color: 'white' , height:'16px' , width:'16px' ,  }} />
   </ImageBox> 

   <Box>
       <Typography style={{fontSize:'12px' , color:'white'}}>LOCATION</Typography>
       <Box>
       <Typography style={{color:'#C3BA8C' ,fontWeight:'550' , fontSize:'15px' }}>pakistan, Lahore</Typography>
       </Box>
   </Box>
   </InfoWrapper>

   
   <hr style={{margin:'1rem 3rem' , }}></hr>
   <Box style={{display:'flex' , justifyContent:'center' , margin:'1.5rem 3rem 1rem 3rem'}} >
       <span > 
       <a href={facebookApiUrl || '#'} target='_blank'  rel='noopener noreferrer'>   <SoicalMedia src={FacebookSvg} alt="facebook-logo" title='visit-facebook'/> </a>
       </span>
       <span > 
       <a href={linkedInApiUrl || '#'}  target='_blank' rel='noopener noreferrer'>   <SoicalMedia src={LinkedInSvg} alt="linkedin-logo" title='visit-linkedin'/> </a>
       </span>
       <span>
       <a href={githubApiUrl || '#'}  target='_blank' rel='noopener noreferrer' >   <SoicalMedia src={GitHubSvg} alt="github-logo" title='visit-github' /> </a>
       </span>
       <span >
           <a href='/' style={{color:'#C3BA8C'}} target='_blank' rel='noopener noreferrer'> <SoicalMedia src={InstagramSvg} alt="insta-logo" title='visit-instagram'/>  </a>
       </span>
   </Box>

  
   </Box> )}

    
    </>
    
  );
}

export default SideBarOnTop;
