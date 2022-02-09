import { makeStyles } from '@material-ui/core/styles';
import { maxHeight } from '@mui/system';
//181a1b
const buttonSize = '200px';
export default makeStyles((theme) => ({
  

  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  grid:{
    alignItems: "center", 
    justifyContent: "center",
  },

  profilePicture:{
    alignItems: 'center',
    backgroundSize: 'cover',
    width: '400px',
    height: '400px',
  },
  paper: {
    padding: theme.spacing(2),
    background: '#d1d1d1',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },

  container:{ 
    display: "flex"
    
  },
  textSpace:{
    marginBottom: '2222210px'
  },
  textSpaceEndTotalNeg:{
    marginTop:10,
    color: "#e61e29" 
  },  
  buttonSubmit: {
    margin: 2,
    width: buttonSize,
    height: '50px',
    backgroundColor: "grey",
    color: "white",
    alignItems: "center"
  },
  buttonCancel: {
    margin: 1,
    width: buttonSize,
    height: '50px',
    backgroundColor: "green",
    color: "white",
    alignItems: "center"
  },
  buttonKg:{
    marginTop: 100,
    width: buttonSize,
    height: '135px',
    width: "100%",
    backgroundColor: "orange",
    color: "white",
    alignItems: "center"
  },
  boxInfo: {
  
    height: '200px'
  },
  col: {
    width: '300px',
    float: 'left',
    }

} ));