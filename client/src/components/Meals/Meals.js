import React, {useState} from 'react';
import { TextField, Stack, Typography, Box, Button, Divider} from '@mui/material';
import { LocalizationProvider, DateRangePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import useStyles from './styles';
import { DataGrid } from '@mui/x-data-grid';
import { useMovieData } from '@mui/x-data-grid-generator';

const Meals = () => {
    const classes = useStyles();

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

    
    const data = useMovieData();

    const renderTable = () =>(
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
        {...data}
        disableSelectionOnClick
        disableRowGrouping
        experimentalFeatures={{
        rowGrouping: true,}}
        />
  </div>
  )

return (
    <>
        <Typography variant="h1" className={classes.title}>Meals</Typography>
        <Divider thickness={10}/>

        <Typography variant="h4" className={classes.title}>Insert New Meal</Typography>


        <Typography variant="h4" className={classes.title}>View Meals</Typography>
        <Stack direction="column" sx={{paddingLeft: '30px'}} >
        <Stack direction="row" spacing={2} sx={{paddingBottom:'30px', alignContent: 'Center'}}>  
            <Typography variant="h6">Day of meal:</Typography>
            {renderRangePicker()}
        </Stack>
        <Box sx={{paddingLeft: '160px', paddingBottom: '30px'}}>
        <Button variant="contained" size="large">Submit</Button>
        </Box>
        </Stack>

        {renderTable()};
    </>
)
}

export default Meals