import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin,signup } from '../../actions/accounts.js';
import { useNavigate } from 'react-router-dom';
import PasswordStrengthBar from 'react-password-strength-bar';

const initialState = { firstName: '', email: '', password: '', confirmPassword: '' , lastName: ''};

const SignUp = () => {
  const [formData, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [isSigninSuccess, setIsSigninSuccess] = useState(false);
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);

  

  const classes = useStyles();
  const navigate = useNavigate();
  //Adding dispatcher
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  //switching login to signout
  const switchMode = () => {
    setIsSigninSuccess(false);
    setIsSignupSuccess(false);
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const clearText = () =>{
    setForm({ ...formData, password: '', confirmPassword: '', email: ''});
    console.log(formData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    /*
      Connecting Backend Code
    */
    if (isSignup) {
      dispatch(signup(formData,navigate))
      .catch(setIsSignupSuccess(true)) //fix because .catch catches both success and failure

    } else {
      dispatch(signin(formData,navigate))
      .catch(setIsSigninSuccess(true))
    }
    clearText()
  };
  
  const handleChange = (e) => setForm({ ...formData, [e.target.name]: e.target.value }); // sign up <--> sign in keeps the same email and password

  return(
    <div className={classes.background}> 
      <div className={classes.centerPaper}>
        <Paper className={classes.paper} elevation={6}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        
          {  isSigninSuccess && <Typography component="h1" variant="h6">Email/Password is in correct!</Typography>}
          {  isSignupSuccess && <Typography component="h1" variant="h6">Email already taken!</Typography>}


          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                    <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                </>
              )}
            <Input name="email" val={formData.email} label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" val={formData.password} label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
            { isSignup && <PasswordStrengthBar className={classes.passwordProgressBar} password={formData.password} />}
            { isSignup && <Input val={formData.confirmPassword} name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" handleShowPassword={handleShowPassword}/> }
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