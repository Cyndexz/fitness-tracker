import { makeStyles } from '@material-ui/core/styles';
import { maxHeight } from '@mui/system';
//181a1b
export default makeStyles((theme) => ({
  
   CynthiaIsGay: {
    maxWidth: 'inherit',
    maxHeight: 'inherit',
    background: 'linear-gradient(to bottom, #ffcf40, #ffae00)',
  },
  
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
   
    width: 'auto',
    height: 'auto',

  },




  paper: {
    padding: theme.spacing(3),
    background: '#d1d1d1',
    
    // height:'',
    // paddingBottom:''

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
    margin: 10,
    width: "300px",
    height: '50px',
    backgroundColor: "grey",
    color: "white",
    alignItems: "center"
  },
  buttonCancel: {
    margin: 0,
    width: "300px",
    height: '50px',
    backgroundColor: "green",
    color: "white",
    alignItems: "center"
  },
  // mainContainer: {
  
  //   // box-sizing: border-box;
  //   // margin-right: auto;
  //   // display: block;
  //   // padding-left: 16px;
  //   // padding-right: 16px;
  // },
  boxInfo: {
  
    height: '200px'
  },
  col: {
    width: '300px',
    float: 'left',
    }

} ));