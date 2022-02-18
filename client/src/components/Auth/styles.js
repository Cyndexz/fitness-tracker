
import { makeStyles } from '@material-ui/core/styles';
import imageWall from '../../images/sunset.jpg';

export default makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${imageWall})`,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'absolute', 
},
  centerPaper:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: "auto",
    width: "50%",
    height: "50%",

  },
  paper: {
    width:"400px",
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  passwordProgressBar:{
    width: '95%',
    marginLeft: '11px',
  }
  //style={{ width: '90%' , marginLeft: '11px'  }}
}));