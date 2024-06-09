import React, { useState } from "react";
import { Typography, Box, Container, Grid, Card, CardContent, Button } from "@mui/material";

const staticArticles = [
  { id: 1, title: 'BMW 3 LCI for 2024: New Features and Updates', date: 'June 9, 2024', summary: 'Discover the latest updates and features of the 2024 BMW 3 Series.', fullText: 'Discover the latest updates and features of the 2024 BMW 3 Series. From advanced technology to enhanced performance, explore what makes this model stand out. The 2024 model includes a new suite of driver assistance features, a redesigned interior, and an upgraded engine that boosts performance while maintaining fuel efficiency.' },
  { id: 2, title: 'BMW X7: The Pinnacle of Comfort and Space', date: 'June 1, 2024', summary: 'The BMW X7 offers unmatched luxury and space for family adventures.', fullText: 'The BMW X7 offers unmatched luxury and space for family adventures. This full-size SUV features a sumptuous interior, advanced technology, and powerful engine options. The 2024 X7 is designed for those who desire comfort, space, and performance in one package.' },
  { id: 3, title: 'BMW X3: The Versatile Compact SUV', date: 'May 25, 2024', summary: 'The BMW X3 offers a perfect balance of performance, space, and technology.', fullText: 'The BMW X3 offers a perfect balance of performance, space, and technology. The 2024 X3 comes with a host of updates, including enhanced connectivity features, improved interior materials, and a range of efficient and powerful engines, making it an ideal choice for versatile urban and off-road driving.' },
  { id: 4, title: 'BMW 8 Series: Elegance and Power Combined', date: 'April 30, 2024', summary: 'Experience the perfect blend of elegance and power with the BMW 8 Series.', fullText: 'Experience the perfect blend of elegance and power with the BMW 8 Series. The 2024 model features a luxurious interior, a range of powerful engines, and advanced driving dynamics. Whether in coupe, convertible, or gran coupe form, the 8 Series delivers an unparalleled driving experience.' },
  { id: 5, title: 'BMW X5: Ultimate Luxury SUV Experience', date: 'April 20, 2024', summary: 'Experience the BMW X5, combining luxury and versatility for the ultimate SUV experience.', fullText: 'Experience the BMW X5, combining luxury and versatility for the ultimate SUV experience. The new X5 comes with a revamped interior featuring premium materials and cutting-edge technology. Engine options include a powerful V8 and a fuel-efficient hybrid, catering to diverse preferences.' },
  { id: 6, title: 'BMW i4: Electric Performance Sedan', date: 'April 5, 2024', summary: 'The BMW i4 combines electric efficiency with sporty dynamics.', fullText: 'The BMW i4 combines electric efficiency with sporty dynamics. This all-electric sedan features a sleek design, long-range capability, and the driving performance BMW is known for. The i4 is part of BMW\'s commitment to a sustainable future without compromising on performance.' },
  { id: 7, title: 'BMW 7 Series: Luxury and Innovation', date: 'March 10, 2024', summary: 'The BMW 7 Series sets the standard for luxury sedans.', fullText: 'The BMW 7 Series sets the standard for luxury sedans. The 2024 model includes innovative features like gesture control, an advanced infotainment system, and an opulent interior. The engine options range from efficient hybrids to powerful V12s, offering both performance and refinement.' },
  { id: 8, title: 'BMW M Series: Performance and Precision', date: 'March 1, 2024', summary: 'Explore the BMW M Series, known for its high performance and precision engineering.', fullText: 'Explore the BMW M Series, known for its high performance and precision engineering. The M Series offers a thrilling driving experience with powerful engines and agile handling. Each model is crafted to provide maximum performance and driving pleasure.' },
  { id: 9, title: 'BMW Z4: A Roadster Redefined', date: 'February 15, 2024', summary: 'Experience the joy of open-top driving with the BMW Z4.', fullText: 'Experience the joy of open-top driving with the BMW Z4. This roadster combines sporty performance with elegant design. The 2024 Z4 features updated technology, enhanced aerodynamics, and a choice of powerful engines that deliver a thrilling driving experience.' },
  { id: 10, title: 'Sustainable Driving with BMW i Series', date: 'February 10, 2024', summary: 'Learn about the BMW i Series, our commitment to sustainable driving.', fullText: 'Learn about the BMW i Series, our commitment to sustainable driving. The i Series features electric and hybrid models that deliver impressive performance with reduced emissions. Discover how BMW is leading the way in sustainable mobility.' },
  { id: 11, title: 'Maintaining Your BMW: Essential Tips', date: 'January 30, 2024', summary: 'Keep your BMW in top condition with our essential maintenance tips.', fullText: 'Keep your BMW in top condition with our essential maintenance tips. Regularly check your tire pressure, oil levels, and ensure timely servicing. These simple steps can help prolong your vehicle\'s life and maintain its performance.' },
  { id: 12, title: 'BMW X1: Compact SUV with Big Ambitions', date: 'January 15, 2024', summary: 'Discover the versatility and capability of the BMW X1.', fullText: 'Discover the versatility and capability of the BMW X1. This compact SUV offers a spacious interior, advanced safety features, and dynamic performance. The 2024 X1 is equipped with the latest technology and offers a smooth, comfortable ride for both city driving and weekend adventures.' }
];

const News = () => {
  const [expanded, setExpanded] = useState({});

  const handleExpandClick = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

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
                    {expanded[article.id] ? article.fullText : article.summary}
                  </Typography>
                  <Button onClick={() => handleExpandClick(article.id)} variant="contained" color="primary" sx={{ mt: 2 }}>
                    {expanded[article.id] ? 'Read Less' : 'Read More'}
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

export default News;