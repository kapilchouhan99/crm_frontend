import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { loginapi, setLoginRequestFlag } from '../api';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useUser } from '../context/UserContext';
import Toaster from './ToasterMessage';

function LoginPage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { login } = useUser();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState();
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('contact')
    }
  })


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('email', credentials.email);
      formData.append('password', credentials.password);
      setLoginRequestFlag(true);
      const { data } = await loginapi(formData);
      if (data.status.code === 200) {
        setOpen(true)
        setMessage('Logged In Successfully')
        setTimeout(() => {
          setOpen(false)
          navigate('/contact');
        }, 3000);
        login(data.status.data);
        setLoginRequestFlag(false);
      }
    } catch (error) {
      console.log(error, 'error in catch')
      setOpen(true)
      setMessage(error.response.data.error)
      setTimeout(() => {
        setOpen(false)
      }, 3000);
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Toaster open={open} message={message} />
            <TextField
              margin="normal"
              fullWidth
              name="email"
              type="email"
              label="Email"
              value={credentials.email}
              onChange={handleChange}
              autoFocus
              required
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              type="password"
              label="Password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                {/* <Link to="/register">Register here</Link> */}
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </div>
  );
}

export default LoginPage;

