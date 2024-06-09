import React, { useState } from 'react';
import { Typography, Box, Container, Grid, TextField, Button, Alert, Paper } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    setErrors(prevState => ({ ...prevState, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccessMessage('Your message has been sent successfully.');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setSuccessMessage('');
    }
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>Contact Us</Typography>
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                error={!!errors.name}
                helperText={errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="message"
                label="Message"
                value={formData.message}
                onChange={handleChange}
                fullWidth
                multiline
                rows={4}
                error={!!errors.message}
                helperText={errors.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        <Box mt={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom> Contact Information</Typography>
            <Typography variant="body1"><strong>BMW Dealership</strong></Typography>
            <Typography variant="body1">Sarajevo, BiH, 71000</Typography>
            <Typography variant="body1">Phone: 033 766-905</Typography>
            <Typography variant="body1">Email: contact@bmwdealership.com</Typography>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;