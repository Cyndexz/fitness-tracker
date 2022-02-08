import React from 'react';
import { CardMedia, Typography, Box,Card,CardContent} from '@mui/material';

const TopWorkout = ({top3Names, top3Calories, top3Minutes, image}) => {

    console.log(TopWorkout);

    return(
        <Card sx={{ display: 'inline-flex'}}>
        
            <Box sx={{ display: 'inline-flex', flexDirection: 'column'}} >
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography textAlign="center" component="div" variant="h5"> {top3Names}</Typography>
                    <Typography textAlign="right" variant="subtitle1" color="text.secondary" component="div"> Burned Cal: {top3Calories}</Typography>
                    <Typography textAlign="right" variant="subtitle1" color="text.secondary" component="div">  Duration: {top3Minutes}</Typography>
                </CardContent>
            </Box>
            <CardMedia  component="img" sx={{ width: 130 }} image={image} alt="TopWorkout"/>
        </Card>

    );
};

export default TopWorkout;
