import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  profilePicture:{
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },
  paper: {
    padding: theme.spacing(3),
    background: '#d1d1d1',
    height:'',
    paddingBottom:''

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
  buttonSubmit: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#0ab101",
    alignItems: "center"
  },
  buttonClear: {
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: "#e61e29",
  },


  textSpace:{
      marginTop:10
  },
  textSpaceEndTotalNeg:{
    marginTop:10,
    color: "#e61e29" 
  },  
  container:{ 
    display: "flex"

  },
  textSpace:{
      marginTop:10
  },
  textSpaceEndTotalNeg:{
    marginTop:10,
    color: "#e61e29" 
  },  
  buttonSubmit: {
    margin: 10,
    width: "150px",
    backgroundColor: "grey",
    color: "white",
    alignItems: "center"
  },
  buttonCancel: {
    margin: 10,
    width: "150px",
    backgroundColor: "green",
    color: "white",
    alignItems: "center"
  },
  mainContainer: {
  
    // box-sizing: border-box;
    // margin-right: auto;
    // display: block;
    // padding-left: 16px;
    // padding-right: 16px;
  },
  boxInfo: {
  
    height: '200px'
  },
  col: {
    width: '300px',
    float: 'left',
    }

} ));