import React, {useState} from 'react';
import { Avatar,Container, Grid , Paper, Stack, Grow, CardMedia, TextField, Typography, Box,Card,CardContent, IconButton} from '@mui/material';
import useStyles from './styles';
import { useTheme } from '@mui/material/styles';
import ModeIcon from '@mui/icons-material/Mode';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import EditOffIcon from '@mui/icons-material/EditOff';
import NavBar from '../Navbar/Navbar';

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";


//Test
import icon from '../../images/user.png'
import profilePicture from '../../images/test_image_profile.png';
import workoutTypePic1 from '../../images/running.jpg';
import workoutTypePic2 from '../../images/swimming.jpg';
import workoutTypePic3 from '../../images/stairStepper.jpg';

//

import Graph from './Graph/Graph';  
import TopWorkout from './TopWorkout/TopWorkout';
import { Button, Icon } from '@material-ui/core';
import { height } from '@mui/system';

const Profile = () => {


    const theme = useTheme();
    const classes = useStyles();
    const [isUpdate, setIsUpdate] = useState(false);    
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openFailure, setOpenFailure] = useState(false);


    const switchMode = () => {
        
        setIsUpdate((prevIsUpdate) => !prevIsUpdate);
        
      };


    const handleEdit = () => { 
        // handleClickFailure(); //use to tell user their data can not be entered
        handleClickSuccess(); //use to tell user their data did entered
        switchMode();
    };
    
    //snackbar
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const handleClickSuccess = () => {
        setOpenSuccess(true);
    };
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {return;}
        setOpenSuccess(false);
    };
    const handleClickFailure = () => {
        setOpenFailure(true);
    };
    const handleCloseFailure = (event, reason) => {
        if (reason === "clickaway") {return;}
        setOpenFailure(false);
    };
    
    // background: rgb(255,236,213);
// background: radial-gradient(circle, rgba(255,236,213,1) 0%, rgba(255,166,0,1) 100%);

    //Testing until we can connect to backend
    const age = 24;
    const gender = 'Male';
    const name = "Abel";
    const weight = 200;
    const bfp = 20;
    const height = "5 '10";

    const dateArray  = ['Feb','Jan','March', 'April'];
    const weightArray = ['200','195','176', '160'];
    const label = "Weight";

    const top3Names = ["Running","Swimming","Lifting"];
    const top3Calories = [600,300,400];
    const top3Minutes  = [60,30,40];
    const image = [workoutTypePic1,workoutTypePic2,workoutTypePic3];
   
    //
    return( 
        
        <Container maxWidth="xl" className={classes.CynthiaIsGay} >

        <Container maxWidth="xl" sx={{marginTop: 5}}>    
            <NavBar/>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} className={classes.grid} container >
                    <img src={icon} className={classes.profilePicture} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Card sx={{minWidth:275, minHeight:500}}>
                        <CardContent align="left">
                            <Typography align="center" variant="h5">Profile</Typography>
                            {isUpdate ? 
                                <Grid height={400} container direction={"column"} spacing={5} >
                                    <Grid item>
                                        <TextField className={classes.textSpace} fullWidth variant="outlined" label="Age"  ></TextField>
                                    </Grid>
                                    <Grid item>
                                        <TextField className={classes.textSpace} fullWidth variant="outlined" label="Gender"  ></TextField>
                                    </Grid>
                                    <Grid item>
                                        <TextField className={classes.textSpace}  fullWidth variant="outlined" label="Name" ></TextField>
                                    </Grid>
                                    <Grid item>
                                        <TextField className={classes.textSpace}  fullWidth variant="outlined" label="Weight"></TextField>
                                    </Grid>
                                    <Grid item>
                                        <TextField className={classes.textSpace}  fullWidth variant="outlined" label="BMI"  ></TextField>
                                    </Grid>
                                    <Grid item>
                                        <TextField className={classes.textSpace}  fullWidth variant="outlined" label="Height"  ></TextField>
                                    </Grid>
                                </Grid> 
                                : 
                                <Grid height={400} container direction={"column"} spacing={5} >
                                    <Grid item>
                                        <Typography sx={{fontSize:40}}>Age: {age}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{fontSize:40}}>Gender: {gender}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{fontSize:40}}>Name: {name}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{fontSize:40}}>Weight: {weight}lbs</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{fontSize:40}}>BFP: {bfp}%</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{fontSize:40}}>Height: {height}</Typography>
                                    </Grid>
                                </Grid>       
                            }
                            <Grid container marginTop={1} spacing={2}>
                                <Grid item xs={12} sm={12} md={6} className={classes.grid} container >
                                    <Button className={classes.buttonSubmit} onClick={switchMode} variant="contained" endIcon={isUpdate ?  <EditOffIcon/>: <ModeIcon/> } color="primary" size="large"  >
                                        {isUpdate ? "Cancel" : "Edit"}
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} className={classes.grid} container >
                                    {isUpdate ?  <Button className={classes.buttonCancel} onClick={handleEdit} endIcon={<SaveAsIcon/>} variant="contained"> Save </Button> : ''}
                                </Grid>
                            </Grid>
                        </CardContent>
                   </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={9} >
                    <Paper className={classes.paper}>
                        <Graph  date={dateArray} weight={weightArray} label={label} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={3} >
                    <Paper className={classes.paper}>
                        <Paper >
                            <Typography marginBottom={2} align='center' variant='h6'>Last Workouts</Typography>
                        </Paper>
                        <Grid className={classes.grid}  container direction={{xs: "column", lg: "column"}}  spacing={5.20}> 
                            <Grid item xs={4} sm={12} md={6}>
                                <TopWorkout top3Names={top3Names[0]} top3Calories={top3Calories[0]} top3Minutes={top3Minutes[0]} image={image[0]}/>
                            </Grid>
                            <Grid item xs={4} sm={12} md={6}> 
                                <TopWorkout top3Names={top3Names[1]} top3Calories={top3Calories[1]} top3Minutes={top3Minutes[1]} image={image[1]}/>
                            </Grid>
                            <Grid item xs={4} sm={12} md={6}>
                                <TopWorkout top3Names={top3Names[2]} top3Calories={top3Calories[2]} top3Minutes={top3Minutes[2]} image={image[2]}/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
           
            <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                    Data Enter Success!
                </Alert>
            </Snackbar>
            <Snackbar open={openFailure} autoHideDuration={6000} onClose={handleCloseFailure}>
                <Alert onClose={handleCloseFailure} severity="error" sx={{ width: "100%" }}>
                    Can not be updated!
                </Alert>
            </Snackbar>
        </Container>



    </Container>
   

       
 
    )
};

export default Profile;
