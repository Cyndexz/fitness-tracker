import React, {useState} from 'react';
import { TextField, Stack, Typography, Grid, Autocomplete, Box, InputAdornment, FormControl, Button, Divider} from '@mui/material';
import { LocalizationProvider, DatePicker, DateRangePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import useStyles from './styles';

const Workouts = () => {
  const classes = useStyles();
  const [value, setValue] = useState(new Date());
  const [workout, setWorkout] = useState(null);
  const [duration, setDuration] = useState(null);
  
  const handleWorkout= (event) => {
    setWorkout(event.target.value);
  };

  const handleChange = (newDuration) => {
    setDuration(newDuration);
  };
    
  const renderDesktopDatePicker = () =>(
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DatePicker
          disableFuture
          label="Date"
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  )

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 }
  ]

  const renderWorkoutSelector = () =>(
      <Autocomplete sx={{width: '300px'}}
        freeSolo
        id="WorkoutType"
        disableClearable
        options={top100Films.map((option) => option.title)}     //Will be replaced with an array of our information or API??
        renderInput={(params) => (
          <TextField
            {...params}
            label="Wrokout Type"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
  )
  
  const renderWorkoutDuration = () =>(
    <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
    <TextField
          id="outlined-number"
          label="Duration"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{endAdornment: <InputAdornment position="end">min</InputAdornment>}}
        />
    </FormControl>
    </Box>
  )

  const [rangeDate, setRangeDate] = useState([null, null]);
  
  const renderRangePicker = () =>(              //Look into not going past current date
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            startText=" Starting Day"
            endText="Ending Day"
            value={rangeDate}
            maxDate="defaultMaxDate"
            onChange={(newValue) => {
              setRangeDate(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
  );

  return(
    <>
      <Typography variant="h1" className={classes.title}>Workouts</Typography>
      <Divider thiccness={10}/>
      <Typography variant="h4" className={classes.title}>Insert New Workout</Typography>
      
      <Stack direction="column" sx={{paddingLeft: '30px'}} >
        <Stack direction="column">
          <Stack direction="row" spacing={2} sx={{paddingBottom:'30px', alignContent: 'Center'}}>  
            <Typography variant="h6">Day of exercise:</Typography>
            {renderDesktopDatePicker()}
          </Stack>
          <Stack direction="row" spacing={2} sx={{paddingBottom:'30px'}}>
            <Typography variant="h6">Exercise type:</Typography>
            {renderWorkoutSelector()}
          </Stack>
          <Stack direction="row" spacing={2} sx={{paddingBottom:'30px'}}>
            <Typography variant="h6">Duration (in Minutes):</Typography>
            {renderWorkoutDuration()}
          </Stack>        
        </Stack>
      <Box sx={{paddingLeft: '160px', paddingBottom: '30px'}}>
        <Button variant="contained" size="large">Submit</Button>
      </Box>
      </Stack>

      <Typography variant="h4" className={classes.title}>View Workouts</Typography>
      <Stack direction="column" sx={{paddingLeft: '30px'}} >
        <Stack direction="row" spacing={2} sx={{paddingBottom:'30px', alignContent: 'Center'}}>  
          <Typography variant="h6">Day of exercise:</Typography>
          {renderRangePicker()}
        </Stack>
        <Box sx={{paddingLeft: '160px', paddingBottom: '30px'}}>
        <Button variant="contained" size="large">Submit</Button>
      </Box>
      </Stack>
    </>

  );
};

export default Workouts;
