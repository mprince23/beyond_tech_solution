import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import ab9 from '../assets/image/about9/ab9.webp';

const About9 = () => {
  return (
    <Box>
      <Box sx={{ backgroundImage: `url(${ab9})`, height: { xs: '60vh', sm: '70vh', md: '75vh', lg: '80vh' },  width: '100%', backgroundSize: 'cover', backgroundPosition: 'center', }} >
        <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: 'rgba(248, 247, 247, 0.4)',  }} > 
          <Container maxWidth="lg">
              <Box>
                  <Typography variant="h2" sx={{ fontSize: { xs: '24px', sm: '30px', md: '40px', lg: '40px' }, color: 'black',  fontWeight: '500', fontFamily: 'Poppins, sans-serif', mb: 2, }} >Let’s Collaborate with Us!</Typography>
                  <Typography sx={{ fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '17px' }, width: { xs: '100%', sm: '100%', md: '100%', lg: '60%' },  color: 'black', }} >From an early stage start-up’s growth strategies to helping existing businesses, we have done it all! The results speak for themselves. Our services work.</Typography>
                  <button style={{color:"white",backgroundColor:"black",height:"50px",width:"220px",marginTop:"40px",borderRadius:"30px"}}>Let's Develop Together</button>
              </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default About9;




