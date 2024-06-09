import React from "react";
import { Typography, Box, Container, Grid, Card, CardContent, Button } from "@mui/material";
import { Link } from 'react-router-dom';

const staticPosts = [
  { id: 1, title: 'BMW 3 Series: The Ultimate Driving Machine', body: 'Explore the features and performance of the BMW 3 Series, a perfect blend of luxury and sportiness.', date: 'May 15, 2024' },
  { id: 2, title: 'BMW X5: Versatility and Comfort Redefined', body: 'Discover the BMW X5, a versatile SUV that offers unparalleled comfort and capability for any adventure.', date: 'April 20, 2024' },
  { id: 3, title: 'BMW Z4: Open-Top Driving Pleasure', body: 'Experience the thrill of open-top driving with the BMW Z4, combining sleek design with dynamic performance.', date: 'March 30, 2024' },
  { id: 4, title: 'BMW M Series: High Performance Masterpieces', body: 'Get to know the BMW M Series, vehicles engineered to deliver high performance and exceptional handling.', date: 'June 9, 2024' },
  { id: 5, title: 'BMW i Series: Innovation and Sustainability', body: 'Learn about the BMW i Series, pioneering electric vehicles that combine innovation with sustainability.', date: 'February 25, 2024' },
];

const Posts = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 4, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" component="h1">
            Explore BMW Models
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {staticPosts.map((post) => (
            <Grid item key={post.id} xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {`${post.date} by BMW Blog`}
                  </Typography>
                  <Typography variant="body1" component="div">
                    {post.body}
                  </Typography>
                  <Button component={Link} to={`/posts/${post.id}`} variant="contained" color="primary" sx={{ mt: 2 }}>
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Posts;