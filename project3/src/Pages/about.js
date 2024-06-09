import React from 'react';
import { Typography, Box, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

const teamMembers = [
  { name: 'Peter van Binsbergen', position: 'Founder & CEO', image: '/images/peter.jpg' }, // Updated from Emily Clark
  { name: 'James Müller', position: 'Lead Sales Manager', image: '/images/james.jpg' },
  { name: 'Marc Bongers', position: 'Service Department Head', image: '/images/marc.jpg' }, // Updated from Sarah Parker
];

const About = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 4, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" component="h1" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h6" component="p">
            We are a premier BMW dealership dedicated to delivering the ultimate driving experience.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Our mission is to provide exceptional service and offer a comprehensive range of BMW vehicles that cater to your every need. We strive to create a seamless and satisfying experience for every customer.
        </Typography>
        <Typography variant="body1" component="p">
          We are committed to helping you find the perfect BMW that suits your lifestyle and to maintaining your vehicle with top-notch service.
        </Typography>
      </Container>

      <Box sx={{ backgroundColor: 'grey.200', py: 8 }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>
            Meet Our Team
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item key={index} xs={12} sm={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={member.image}
                    alt={member.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.position}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;