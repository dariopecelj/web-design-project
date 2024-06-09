import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/navbar';
import { ThemeProvider, } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './Pages/home';
import About from './Pages/about';
import News from './Pages/news';
import Contact from './Pages/contact';
import Explore from './Pages/explore';
import '@fontsource/roboto';
import theme from './theme'; 

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;