import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from "react";
import {auth, db, firebaseApp} from "../Service/Firebase";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [phone, setPhone] = useState('')
  const [aadhar, setAadhar] = useState('')

  const signin = () => {
    setAadhar(document.getElementById('aadhar_id').value);
    console.log(aadhar)
    db.collection("voters").doc(aadhar).get().then((querySnapshot) => {
      const data = querySnapshot.data();
      if(data){
        setPhone(data.phone);
        if(data.isVoted){
           alert("You've casted your vote already!");
           window.location.reload();
        }else{
          sessionStorage.setItem('phone', data.phone);
          sessionStorage.setItem('aadhar', data.aadhar_id);
          window.location.href = "/otp-verify";
        }
      }else{
        alert("Enter your valid voter details");

      }
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      voter_id: data.get('voter_id'),
      aadhar_id: data.get('aadhar_id'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 18,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome to E-Vote
          </Typography>
          <Typography component="p">
            .
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="voter_id"
              label="Voter ID"
              name="text"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="aadhar_id"
              label="Aadhar Number"
              type="number"
              id="aadhar_id"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={signin}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}