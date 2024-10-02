import React from 'react';
import { Timeline, TimelineDot, TimelineContent, TimelineConnector, TimelineSeparator, TimelineItem } from '@mui/lab';
import { styled , Typography ,Box } from '@mui/material';
import {LocalLibraryOutlined , AutoStoriesOutlined} from '@mui/icons-material';
import {Stack , LinearProgress} from '@mui/joy';
const StyledTimelineDot = styled(TimelineDot)({
  borderRadius: '15%',
  background: '#E6CA5E',
  height: '2rem',
  width: '2rem',
  boxShadow: '0px 0px 2px 2px #dbd7ad, 0px 0px 2px 2px #dbd7ad',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#FFFFFF', // Assuming the color of the book icon should be white
});

const StyledResume = styled('h2')({
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
  }
});

function Resume() {
  return (

<>


    <StyledResume>Resume</StyledResume>

    <Timeline
      sx={{
        '& .MuiTimelineItem-root::before': {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <StyledTimelineDot>
            <AutoStoriesOutlined />
          </StyledTimelineDot>
          <TimelineConnector style={{ height: '2rem', background:'#54422F' }} />
        </TimelineSeparator>
        <TimelineContent style={{ padding: '25px' , fontWeight:'bold' , fontSize:'24px'}}>Education</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            style={{
              margin: '15px',
              boxShadow: '0px 0px 4px 2px #e6ca5e, 0px 0px 4px 2px #e6ca5e',

              background: '#e6ca5e',
              border: '1px solid #FFFFFF',
              padding: '8px',
            }}
          />
          <TimelineConnector style={{ height: '2rem',background:'#54422F' }} />
        </TimelineSeparator>
        <TimelineContent style={{ padding: '6px 23px' }}> <Typography variant='h4' style={{fontSize:'16px',textShadow: '4px 4px 8px #656565', fontWeight:'bold' , padding: '6px 0px'}}> Superior University </Typography>
        <span style={{fontSize:'14px' , color:'#dbd7ad', padding:'8px 0px'}}>2022 — 2026</span> 
        <span style={{fontSize:'14px' , background:'#54422F' , padding:'5px', borderRadius:'5px' , margin:'20px' , color:'#dbd7ad'}}>Present</span>
        <Typography style={{padding:'16px 0px' , maxWidth:'59rem'}}>I am pursuing a Bachelor of Science in Software Engineering from <strong>Superior University</strong>, where I am gaining extensive knowledge and hands-on experience in software development and engineering principles. </Typography>
        </TimelineContent>
      </TimelineItem>

      
      <TimelineItem>
        <TimelineSeparator >
          <TimelineDot
            style={{
              margin: '15px',
              boxShadow: '0px 0px 4px 2px #e6ca5e, 0px 0px 4px 2px #e6ca5e',

              background: '#e6ca5e',
              border: '1px solid #FFFFFF',
              padding: '8px',
            }}
          />
          <TimelineConnector style={{ height: '2rem',background:'#54422F' }} />
        </TimelineSeparator>
        <TimelineContent style={{ padding: '6px 23px' }}> <Typography variant='h4' style={{fontSize:'16px',textShadow: '4px 4px 8px #656565', fontWeight:'bold' , padding: '6px 0px'}}> Punjab group of Colleges</Typography>
        <span style={{fontSize:'14px' , color:'#dbd7ad', padding:'8px 0px'}}>2020 — 2022</span> 
        <span style={{fontSize:'14px' , background:'#54422F' , padding:'5px', borderRadius:'5px' , margin:'20px' , color:'#dbd7ad'}}>Completed</span>
        <Typography style={{padding:'16px 0px' , maxWidth:'46rem'}}>I achieved an <strong>A grade </strong> in Fsc Pre-Engineering from <strong>Punjab group of Colleges</strong>, highlighting my strong proficiency in mathematics and science disciplines. </Typography>
        </TimelineContent>
      </TimelineItem>



      <TimelineItem>
        <TimelineSeparator >
          <TimelineDot
            style={{
              margin: '15px',
              boxShadow: '0px 0px 4px 2px #e6ca5e, 0px 0px 4px 2px #e6ca5e',
              background: '#e6ca5e',
              border: '1px solid #FFFFFF',
              padding: '8px',
            }}
          />
        </TimelineSeparator>
        <TimelineContent style={{ padding: '6px 23px' }}> <Typography variant='h4' style={{fontSize:'16px',textShadow: '4px 4px 8px #656565', fontWeight:'bold' , padding: '6px 0px'}}> Govt Boys High School</Typography>
        <span style={{fontSize:'14px' , color:'#dbd7ad', padding:'8px 0px'}}>2019 — 2020</span> 
        <span style={{fontSize:'14px' , background:'#54422F' , padding:'5px', borderRadius:'5px' , margin:'20px' , color:'#dbd7ad'}}>Completed</span>
        <Typography style={{padding:'16px 0px' , maxWidth:'46rem'}}>I achieved  an <strong style={{color:'#dbd7ad'}}> A grade</strong> in Matric from <strong style={{color:'#dbd7ad'}}>Govt Boys High School,</strong> demonstrating my exceptional academic performance and dedication across all subjects.</Typography>
        </TimelineContent>
      </TimelineItem>

    </Timeline> 


     {/*  ==================== > "Skills Section" <========================== */}

     <Typography variant='h2' style={{fontSize:'24px' , fontWeight:'bold' , padding: '0rem 2rem', }}>My Skills</Typography>

     <Box style={{ margin: '15px',
              boxShadow: '0px 0px 5px 3px #e6ca5e, 0px 0px 5px 3px #ddb432',
              background: '#54422F',borderRadius:'10px',
              border: '1px solid #FFFFFF', padding:'50px'}}>

<Stack spacing={2} sx={{ flex: 1 , gap:'20px'}}>
      
       
      <Typography style={{margin:'0'}}>Html
      <LinearProgress determinate value={100} /> </Typography>

      <Typography style={{margin:'0'}}>CSS
      <LinearProgress determinate value={90} /> </Typography>

      <Typography style={{margin:'0'}}>BooStrap
      <LinearProgress determinate value={85} /> </Typography>

      <Typography style={{margin:'0'}}>JavaScript
      <LinearProgress determinate value={70} /> </Typography>


      <Typography style={{margin:'0'}}>React Js
      <LinearProgress determinate value={80} /> </Typography>

      <Typography style={{margin:'0'}}>Material Ui
      <LinearProgress determinate value={90} /> </Typography>


      <Typography style={{margin:'0'}}>Material Tailwind
      <LinearProgress determinate value={100} /> </Typography>


    </Stack>

     </Box>

   
    </>
  );
}

export default Resume;
