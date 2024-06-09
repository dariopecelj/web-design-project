import React from "react";
import { Typography, Box, Container, Grid, Card, CardContent, Button } from "@mui/material";
import { Link } from 'react-router-dom';

const staticArticles = [
  { id: 1, title: 'BMW 3 Series 2024: New Features and Updates', date: 'May 15, 2024', summary: 'Discover the latest updates and features of the 2024 BMW 3 Series. From advanced technology to enhanced performance, explore what makes this model stand out.' },
  { id: 2, title: 'BMW X5: Ultimate Luxury SUV Experience', date: 'April 20, 2024', summary: 'Experience the BMW X5, combining luxury and versatility for the ultimate SUV experience. Read about its new interior and powerful engine options.' },
  { id: 3, title: 'Maintaining Your BMW: Essential Tips', date: 'March 30, 2024', summary: 'Keep your BMW in top condition with our essential maintenance tips. Learn how to care for your vehicle and ensure it performs at its best.' },
  { id: 4, title: 'BMW M Series: Performance and Precision', date: 'June 10, 2024', summary: 'Explore the BMW M Series, known for its high performance and precision engineering. Dive into the features that make these cars perfect for driving enthusiasts.' },
  { id: 5, title: 'Sustainable Driving with BMW i Series', date: 'February 25, 2024', summary: 'Learn about the BMW i Series, our commitment to sustainable driving. Discover the innovative technology and environmental benefits of our electric and hybrid models.' },
];

const Posts = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 4, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" component="h1">
            BMW News & Updates
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {staticArticles.map((article) => (
            <Grid item key={article.id} xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {article.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {article.date} by BMW Dealership
                  </Typography>
                  <Typography variant="body1" component="div">
                    {article.summary}
                  </Typography>
                  <Button component={Link} to={`/posts/${article.id}`} variant="contained" color="primary" sx={{ mt: 2 }}>
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