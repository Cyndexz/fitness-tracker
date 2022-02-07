import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  //switching login to signout
  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      console.log("Signup")
    } else {
      console.log("login") 
    }
  };
  
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return(
    <div className={classes.background}> 
  
    <div className={classes.centerPaper}>

      <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
        
              <Input name="userName" label="User Name" handleChange={handleChange} type="userName" />
              <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
              { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              { isSignup ? 'Sign Up' : 'Sign In' }
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </div>
  )
 
};

export default SignUp;