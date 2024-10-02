import React, { useState } from 'react';
import { Box, Typography, styled, Container, TextField, Button } from '@mui/material';

// Styled components
const MapBoxStyled = styled(Box)({
  opacity: 0.8,
  margin: '2rem 1rem',
  '&:hover': {
    opacity: 0.5
  }
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
    width: '7%',
    height: '5px',
    background: '#bcb2b2',
    borderRadius: '3px',
    boxShadow: '-2px -2px 6px 3px #373738, 2px 2px 6px 3px #373738',
  }
});

function Contact() {
  // State to track form input values
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  // State to track button disabled state
  const [isFormFilled, setIsFormFilled] = useState(false);

  // Function to handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission here
  };

  // Effect to enable/disable button when all fields are filled
  React.useEffect(() => {
    const isFilled = Object.values(formData).every(val => val !== '');
    setIsFormFilled(isFilled);
  }, [formData]);

  return (
    <>
      <StyledContact>About Me</StyledContact>

      <MapBoxStyled className="mapbox">
        <figure>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd" width="100%" height="400px" loading="lazy"></iframe>
        </figure>
      </MapBoxStyled>

      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
          <Typography variant="h3" gutterBottom color="white">Contact Form</Typography>
        </Box>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            color="white"
          />
          <TextField
            label="Email Address"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            color="white"
          />
          <TextField
            label="Your Message"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            color="white"
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!isFormFilled}
            sx={{ mt: 2 }}
          >
            <ion-icon name="paper-plane" role="img" className="md hydrated" aria-label="paper plane"></ion-icon>
            <span>Send Message</span>
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Contact;



// is automatically button become able when filled alll fileds?

// To automatically enable the button when all fields are filled, you can use state to track the values of the input fields and enable/disable the button accordingly. Here's how you can do it:



// In this code:

// formData state is used to track the values of the form input fields.
// isFormFilled state is used to track whether all form fields are filled or not.
// useEffect hook is used to update isFormFilled state whenever formData changes.
// The submit button is disabled (disabled={!isFormFilled}) until all form fields are filled.