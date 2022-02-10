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
        zindex: '1',
        margin: '0',
        position: 'relative',
        fontSize: '5rem',
        color: 'white',
        textShadow: '0 0 5px black',
        paddingTop: '200px'
        
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
        flexDirection: 'column',
        alignItems: 'center',
    },
    headers:{
        display: 'flex',
        fontSize: '3rem',
        paddingTop: '560px',
        zindez: '1',
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