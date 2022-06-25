import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ResponsiveAppBar from './components/navBar';
import Footer from './components/footer';

function App() {
  return (
    <Container maxWidth="lg">
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          <BrowserRouter>
            <ResponsiveAppBar />
            <Routes />
            <Footer />
          </BrowserRouter>
        </Typography>
      </Box>
    </Container>
  );
}


export default App;
