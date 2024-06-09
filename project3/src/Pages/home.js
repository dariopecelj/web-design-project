import React from 'react';
import { Typography, Box, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const featuredCars = [
  { id: 1, name: 'BMW 3 Series', model: 'Sedan', image: '/images/bmw3series.jpg', description: 'A blend of luxury and performance, perfect for both city and highway driving.' },
  { id: 2, name: 'BMW X5', model: 'SUV', image: '/images/bmwx5.jpg', description: 'Combining luxury and versatility, ideal for families and adventurous trips.' },
  { id: 3, name: 'BMW Z4', model: 'Convertible', image: '/images/bmwz4.jpg', description: 'Experience open-top driving pleasure with dynamic performance and style.' },
];

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 4, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" component="h1">
            Welcome to BMW Dealership
          </Typography>
          <Typography variant="h6" component="p">
            Discover our exclusive range of BMW models and exceptional customer service.
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Featured BMW Models
        </Typography>
        <Grid container spacing={4}>
          {featuredCars.map((car) => (
            <Grid item key={car.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="auto"
                  image={car.image}
                  alt={car.name}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {car.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {car.model}
                  </Typography>
                  <Typography variant="body1" component="p">
                    {car.description}
                  </Typography>
                  <Button component={Link} to={`/cars/${car.id}`} variant="contained" color="primary" sx={{ mt: 2 }}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Commitment
        </Typography>
        <Typography variant="body1" component="p">
          Our commitment is to provide exceptional service and a diverse range of BMW vehicles. We aim to deliver the ultimate driving experience and ensure customer satisfaction.
        </Typography>
      </Container>
    </Box>
  );
};

export default Home;