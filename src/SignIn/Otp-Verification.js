import React, {Component, useState} from "react";
import OtpInput from "react-otp-input";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import {auth, firebaseApp} from "../Service/Firebase";

const useStyles = makeStyles(theme => ({
  grid: {
    backgroundColor: "grey",
    height: "50vh",
    textAlign: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));


export default function OtpVerification(props) {
  const [otp, setOtp] = useState('');
  const [final, setFinal] = useState('');
  const [show, setshow] = useState(false);

  const handleChange = (otp) => setOtp(otp);

    window.addEventListener('load', () => {
      const phone = sessionStorage.getItem('phone');
      console.log(phone);
        if (phone === "" || phone.length < 10) return;

        let verify = new firebaseApp.auth.RecaptchaVerifier('recaptcha-container');
        auth.signInWithPhoneNumber(phone, verify).then((result) => {
          setFinal(result);
          console.log(result)
          setshow(true);
        })
            .catch((err) => {
              alert(err);
              window.location.reload()
            });
    });
	// Validate OTP
	const ValidateOtp = () => {
      console.log(otp)
		if (otp === null || final === null)
			return;
		final.confirm(otp).then((result) => {
            sessionStorage.setItem("isAuthenticated", 'true');
			window.location.href = '/vote'
		}).catch((err) => {
			alert("Wrong code");
		})
	}

  const classes = useStyles();
  const theme = useTheme();
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Grid
          container
          style={{ backgroundColor: "white" }}
          className={classes.grid}
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item container justify="center">
            <Grid item container alignItems="center" direction="column">
              <Grid item>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
              </Grid>
              <Grid item>
                <Typography component="h1" variant="h5">
                  Verification Code
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Paper elevation={0}>
              <Typography variant="h6">
                Please enter the verification code sent to your mobile
              </Typography>
            </Paper>
          </Grid>
          <div style={{ display: !show ? "block" : "none" }} id="recaptcha-container"></div>
          <Grid
            item
            xs={12}
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <Grid item spacing={3} justify="center">
              <OtpInput
                numInputs={6}
                value={otp}
                onChange={handleChange}
                separator={
                  <span>
                    <strong>.</strong>
                  </span>
                }
                inputStyle={{
                  width: "3rem",
                  height: "3rem",
                  margin: "0 1rem",
                  fontSize: "2rem",
                  borderRadius: 4,
                  border: "1px solid rgba(0,0,0,0.3)"
                }}
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={ValidateOtp}
              >
                Verify
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
