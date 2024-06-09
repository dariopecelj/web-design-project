import React, { useState } from "react";
import { Typography, Box, Container, Grid, Card, CardContent, Button, Modal } from "@mui/material";

const exploreContent = [
  { 
    id: 1, 
    title: 'Exploring BMW Performance', 
    summary: 'Dive into the world of BMW performance cars.', 
    fullText: 'BMW performance cars offer a unique blend of power, precision, and luxury. Our high-performance models are designed for driving enthusiasts who crave the thrill of the road. From the iconic BMW M Series to the innovative BMW i8, each vehicle is engineered to deliver an exceptional driving experience. Learn about the advanced technology, superior engineering, and meticulous craftsmanship that go into every BMW performance car. Discover the latest models, explore their features, and understand why BMW is a leader in the world of high-performance automobiles.', 
    image: '/images/performance.jpg' 
  },
  { 
    id: 2, 
    title: 'The Future of Electric Vehicles', 
    summary: 'Discover BMW’s vision for electric vehicles.', 
    fullText: 'BMW’s electric vehicle lineup represents the future of driving. With a commitment to sustainability and innovation, BMW is at the forefront of the electric vehicle revolution. Our range of electric cars, including the BMW i3 and the BMW iX, are designed to offer an eco-friendly driving experience without compromising on performance or luxury. Explore the cutting-edge technology, impressive range, and sleek design of BMW’s electric vehicles. Learn about our vision for a sustainable future and how we are shaping the future of mobility with our advanced electric and hybrid models.', 
    image: '/images/electric.jpg' 
  },
  { 
    id: 3, 
    title: 'BMW’s Commitment to Sustainability', 
    summary: 'Learn about BMW’s sustainability initiatives.', 
    fullText: 'Sustainability is at the core of BMW’s mission. We are committed to reducing emissions, improving fuel efficiency, and promoting sustainable practices throughout our production processes. From using recycled materials in our vehicles to implementing energy-efficient manufacturing techniques, BMW is dedicated to making a positive impact on the environment. Discover our sustainability initiatives, learn about our goals for the future, and see how BMW is leading the way in the automotive industry with our commitment to environmental responsibility.', 
    image: '/images/sustainability.jpg' 
  },
  { 
    id: 4, 
    title: 'Luxury and Technology in BMW Cars', 
    summary: 'Experience the luxury and technology in BMW cars.', 
    fullText: 'BMW cars are renowned for their luxurious interiors and cutting-edge technology. Each vehicle is designed to provide the ultimate in comfort, convenience, and connectivity. From the latest iDrive system to advanced driver assistance features, BMW’s technology is designed to enhance your driving experience. Explore the luxurious interiors, premium materials, and innovative features that make BMW cars stand out. Learn about the seamless integration of technology and luxury in our vehicles and discover how BMW is setting new standards in the automotive industry.', 
    image: '/images/luxury.jpg' 
  },
  { 
    id: 5, 
    title: 'BMW Heritage and Legacy', 
    summary: 'Understand the rich heritage of BMW.', 
    fullText: 'BMW has a rich history of innovation and excellence. Since its inception, BMW has been committed to creating vehicles that offer superior performance, quality, and design. Explore our legacy, from the early days of aviation engineering to our current position as a global leader in the automotive industry. Learn about the milestones, achievements, and innovations that have shaped BMW’s history. Discover the stories behind some of our most iconic models and see how our commitment to quality and innovation continues to drive us forward.', 
    image: '/images/heritage.jpg' 
  },
  { 
    id: 6, 
    title: 'BMW Motorsport', 
    summary: 'Explore the thrilling world of BMW Motorsport and its rich racing heritage.', 
    fullText: 'BMW Motorsport is synonymous with high performance, innovation, and a legacy of success on the track. From its early days in touring car racing to dominating in endurance events and Formula E, BMW has consistently pushed the boundaries of automotive excellence. Dive into the history of BMW Motorsport, discover the technological advancements born from racing, and learn how these innovations translate to BMW’s consumer vehicles. Whether it’s the roar of the engines at Le Mans or the precision of a DTM race, BMW Motorsport embodies the spirit of competitive driving and engineering mastery.', 
    image: '/images/motorsport.jpg' 
  },
];

const Explore = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (id) => {
    setOpenModal(id);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 4, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" component="h1">
            Explore BMW
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {exploreContent.map((content) => (
            <Grid item key={content.id} xs={12} md={6} lg={4}>
              <Card sx={{ position: 'relative' }}>
                <CardContent>
                  <Box
                    component="img"
                    sx={{
                      width: '100%',
                      height: 0,
                      paddingTop: '56.25%', // 16:9 aspect ratio
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      mb: 2,
                      backgroundImage: `url(${content.image})`,
                    }}
                    alt={content.title}
                  />
                  <Typography variant="h6" component="div">
                    {content.title}
                  </Typography>
                  <Typography variant="body1" component="div" sx={{ mt: 2 }}>
                    {content.summary}
                  </Typography>
                  <Button onClick={() => handleOpenModal(content.id)} variant="contained" color="primary" sx={{ mt: 2 }}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              <Modal
                open={openModal === content.id}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
              >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', maxWidth: 500, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                  <Typography id="modal-title" variant="h6" component="h2">
                    {content.title}
                  </Typography>
                  <Typography id="modal-description" sx={{ mt: 2 }}>
                    {content.fullText}
                  </Typography>
                  <Button onClick={handleCloseModal} variant="contained" color="primary" sx={{ mt: 2 }}>
                    Close
                  </Button>
                </Box>
              </Modal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Explore;