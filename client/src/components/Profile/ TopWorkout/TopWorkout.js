import React from 'react';
import { Avatar,Container, Grid , Paper, Stack, Grow, CardMedia, TextField, Typography, Box,Card,CardContent, IconButton} from '@mui/material';
import { red } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useTheme } from '@mui/material/styles';

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const TopWorkout = ({top3Names, top3Calories, top3Minutes, image}) => {

    console.log(TopWorkout);

    return(

    <Card sx={{ display: 'inline-flex' , borderRadius: '100px'}}>
        <Box sx={{ display: 'inline-flex', flexDirection: 'column'}} >
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography textAlign="center" component="div" variant="h5"> {top3Names}</Typography>
                <Typography textAlign="right" variant="subtitle1" color="text.secondary" component="div"> Total Calories: {top3Calories}</Typography>
                <Typography textAlign="right" variant="subtitle1" color="text.secondary" component="div"> Total Time: {top3Minutes}</Typography>
            </CardContent>
        </Box>
        <CardMedia  component="img" sx={{ width: 130 }} image={image} alt="TopWorkout"/>
    </Card>
    );
};

export default TopWorkout;
