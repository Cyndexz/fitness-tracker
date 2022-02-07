import { makeStyles } from '@material-ui/core/styles';
import homeLogo from '../../images/home.jpg';
import overlay from '../../images/overlay.png';

export default makeStyles((theme) => ({
    // background: {
    //     backgroundImage: `url(${homeLogo})`,
    //     position: 'absolute',
    //     height: '100%',
    //     width: '100%',
    //     objectfit: 'cover',
    //     zindex: '-1',
    //     translateZ: '(-10px) scale (2)'
    // },
    // foreground:{
    //     backgroundImage: `url(${overlay})`,
    //     position: 'absolute',
    //     height: '100%',
    //     width: '100%',
    //     objectfit: 'cover',
    //     translateZ: '(-5px) scale (1.5)'
    // },
    // section:{
    //     fontSize: '2rem',
    //     padding: '2rem',
    //     backgroundColor: '#333',
    //     color: 'white',
    // },
    // title:{
    //     position: 'relative',
    //     fontSize: '7rem',
    //     color: 'white',
    //     textShadow: '0 0 5px black',
    // },
    // wrapper:{
    //     height: '100vh',
    //     overflowY: 'auto',
    //     overflowX: 'hidden',
    //     perspective: '10px',
    // },
    // header:{
    //     position: 'relative',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: '100%',
    //     transformStyle: 'preserve-3d',
    //     zIndex: '-1',
    // },

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