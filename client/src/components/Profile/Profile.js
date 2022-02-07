import React, {useState} from 'react';
import { Avatar,Container, Grid , Paper, Stack, Grow, CardMedia, TextField, Typography, Box,Card,CardContent, IconButton} from '@mui/material';
import useStyles from './styles';
import { useTheme } from '@mui/material/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import UpdateIcon from '@mui/icons-material/Update';
//Test
import profilePicture from '../../images/test_image_profile.png';
import workoutTypePic1 from '../../images/running.jpg';
import workoutTypePic2 from '../../images/swimming.jpg';
import workoutTypePic3 from '../../images/stairStepper.jpg';

import Graph from './Graph/Graph'
import TopWorkout from './ TopWorkout/TopWorkout';
import { Button, Icon } from '@material-ui/core';

const Profile = () => {


    const theme = useTheme();
    const classes = useStyles();
    const [isUpdate, setIsUpdate] = useState(false);    

    const switchMode = () => {
        
        setIsUpdate((prevIsUpdate) => !prevIsUpdate);
        console.log(isUpdate);
        
      };


    const handleEdit = () => {
        console.log("settings clicked!, add update here!");
    };
    
    
    
    
    //Testing until we can connect to backend
    const age = 24;
    const name = "Abel Vega Arteaga";
    const weight = 200;
    const bfp = 20;
    const top3Names = ["Running","Swimming","Lifting"];
    const top3Calories = [5200,2404,2222];
    const top3Minutes  = [1000,4000,2444];
    const image = [workoutTypePic1,workoutTypePic2,workoutTypePic3];
   



    //sx={{ height: 140, width: 100 }}
    
    // <TopWorkout top3Names={top3Names[0]} top3Calories={top3Calories[0]} top3Minutes={top3Minutes[0]} image={image[0]}/>
    // <TopWorkout top3Names={top3Names[1]} top3Calories={top3Calories[1]} top3Minutes={top3Minutes[1]} image={image[1]}/>
    // <TopWorkout top3Names={top3Names[2]} top3Calories={top3Calories[2]} top3Minutes={top3Minutes[2]} image={image[2]}/>
    return( 
  
        <Container maxWidth="xl">    
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        2
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                   <Card sx={{minWidth:275}}>
                        <CardContent align="left">
                            <Typography align="center" variant="h5">Profile</Typography>
                            <Typography sx={{fontSize:40}}>Age: {age}</Typography><Typography sx={{fontSize:40}}>Name: {name}</Typography>
                            <Typography sx={{fontSize:40}}>Weight: {weight}lbs</Typography>
                            <Typography sx={{fontSize:40}}>BFP: {bfp}%</Typography>
                            <Button className={classes.buttonSubmit} onClick={switchMode} variant="contained" endIcon={<SettingsIcon/>} color="primary" size="large"  >
                            {isUpdate ? "Settings" : "Cancel"}
                            </Button>
                            {isUpdate ? "" : <Button className={classes.buttonCancel} onClick={handleEdit} endIcon={<UpdateIcon/>} variant="contained"> Change! </Button>}
                        </CardContent>
                   </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        3
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        4
                    </Paper>
                </Grid>
            </Grid>
        </Container>

       
 
    )
};

export default Profile;
