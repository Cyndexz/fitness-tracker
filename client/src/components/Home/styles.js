import { makeStyles } from '@material-ui/core/styles';
import homeLogo from '../../images/home.jpg';
import overlay from '../../images/overlay.png';

export default makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        width: '1080px',
        flexDirection: 'column',
        alignItems: 'center',
        zindex: '1',
        marginTop: '100px',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        zindex: '1',
        margin: '0',
        position: 'relative',
        fontSize: '5rem',
        color: 'white',
        textShadow: '0 0 5px black',
        marginTop: '70px',
    },
    section: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        zindex: '1',
        marginTop: '320px',
        textAlign: 'center',
        flexdirection: 'column',
        fontSize: '2rem',
        color: 'black',
        fontFamily: 'Merriweather serif',
    },
    parallex_content: {
        display: 'flex',
        justifyContent: 'center',
    },
    background: {
        backgroundImage: `url(${homeLogo})`,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
    },
    foreground:{
        objectfit: 'cover',
        backgroundImage: `url(${overlay})`,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
    },
    parallexdiv: {
        display: 'flex',
        justifyContent: 'center',
        width: '1080px',                //take off to have text span all the way
        flexDirection: 'column',
        alignItems: 'center',
        zindex: '1',
        marginTop: '',
    },
    headers:{
        display: 'flex',
        fontSize: '3rem'
    },
    pics:{
        display:'inline-block', 
        width: '300px',
        height: '300px',
        margin: '30px',
    },
    text:{
        display:'inline-block', 
        width: '300px',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        marginInlineStart: '10px',
        marginInlineEnd: '50px',
    }
}))