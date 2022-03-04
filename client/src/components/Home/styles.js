import { makeStyles } from '@material-ui/core/styles';
import homeLogo from '../../images/home.jpg';
import overlay from '../../images/overlay.png';

export default makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        zindex: '1',
        marginTop: '100px',
    },
    title: {
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: '1',
        margin: '0',
        fontSize: '5rem',
        color: 'white',
        textShadow: '0 0 5px black',
        paddingTop: '200px',
        fontFamily: 'Play',
        position: 'relative',
        
    },
    section: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '320px',
        textAlign: 'center',
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
        backgroundRepeat: 'round',
        position: 'absolute',
        zIndex: '1',
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
        zIndex: '1',
    },
    parallexdiv: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headers:{
        fontSize: '3rem',
        paddingTop: '400px',
    },
    pics:{
        width: '250px',
        height: '250px',
        marginTop: '30px',
        padding: '30px',
        marginLeft: '77px',
    },
    text:{
        width: '300px',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: '1.25rem',
        padding: '30px',
        marginLeft: '77px',
    },
}))