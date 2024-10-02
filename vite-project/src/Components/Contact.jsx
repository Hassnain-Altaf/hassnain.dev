import React from 'react';
import { Box, Typography, styled, Container, TextField, Button } from '@mui/material';

// Correct import statement for the SVG icon
import SendMessageIcon from '../../src/assets/send.svg'; // Updated variable name

const MapBoxStyled = styled(Box)({
  opacity: 0.8,
  margin: '2rem 1rem',
  '&:hover': {
    opacity: 0.5, // Decrease opacity on hover
  },
});

const StyledContact = styled('h2')({
  color: 'white',
  padding: '2rem',
  fontSize: '30px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '26px',
    left: '30px',
    width: '6%',
    height: '5px',
    background: 'white',
    borderRadius: '3px',
    boxShadow: '0px 0px 4px 2px #dbd7ad, 0px 0px 4px 2px #dbd7ad',
  },
});

function Contact() {
  return (
    <Box>
      <StyledContact>Contact</StyledContact>

      <MapBoxStyled className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274167598!2d74.00472289272936!3d31.483103659918054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1722245782693!5m2!1sen!2s"
            width="100%"
            height="500px"
            loading="lazy"
          ></iframe>
        </figure>
      </MapBoxStyled>

      <Container maxWidth="md">
        <Box sx={{ marginTop: '2rem' }}>
          <Typography variant="h3" gutterBottom color="white" style={{ fontSize: '24px', fontWeight: 'bold' }}>
            Contact Form
          </Typography>
        </Box>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextField
            label="Full Name"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            InputLabelProps={{
              style: { color: 'white' }, // Change label color to white
            }}
            inputProps={{
              style: { color: 'white' }, // Change input text color to white
            }}
            InputProps={{
              style: { borderColor: 'white' }, // Change input border color to white
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', // Change default border color to white
                },
                '&:hover fieldset': {
                  borderColor: 'white', // Change border color on hover to white
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white', // Change border color on focus to white
                },
              },
            }}
          />

          <TextField
            label="Email Address"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            InputLabelProps={{
              style: { color: 'white' }, // Change label color to white
            }}
            inputProps={{
              style: { color: 'white' }, // Change input text color to white
            }}
            InputProps={{
              style: { borderColor: 'white' }, // Change input border color to white
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', // Change default border color to white
                },
                '&:hover fieldset': {
                  borderColor: 'white', // Change border color on hover to white
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white', // Change border color on focus to white
                },
              },
            }}
          />

          <TextField
            label="Your Message"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            multiline
            rows={4}
            InputLabelProps={{
              style: { color: 'white' }, // Change label color to white
            }}
            inputProps={{
              style: { color: 'white' }, // Change input text color to white
            }}
            InputProps={{
              style: { borderColor: 'white' }, // Change input border color to white
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', // Change default border color to white
                },
                '&:hover fieldset': {
                  borderColor: 'white', // Change border color on hover to white
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white', // Change border color on focus to white
                },
              },
            }}
          />

          <Button
            variant="contained"
            type="submit"
            style={{
              margin: '10px',
              fontWeight: 'bold',
              color: '#dbd7ad', // Set text color to white
              background: '#54422F', // Set background color to black
            }}
          >
            <img src={SendMessageIcon} alt='send-icon' style={{ margin: '8px 8px 8px 0px' }} />
            {/* Use a regular anchor tag for mailto link */}
            <a href="mailto:hassnainalvi0@gmail.com" style={{ textDecoration: 'none', color: 'white' }}>
              <span>Send Message</span>
            </a>
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
