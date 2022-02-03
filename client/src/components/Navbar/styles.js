import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appbar:{
        background: 'rgba(0, 174, 255, 1)',
        display: 'flex',
        flexDirection: 'row',
        padding: '10px 50px',
        height: '120px',
    },
    navMenu: {
        display: 'Grid',
        listStyle: 'none',
        gridTemplateColumns: 'repeat(5,auto)',
        gridGap: '10px',
        textAlign: 'center',
        width: '70vw',
        justifyContent: 'end',
    },
    navLinks: {
        fontSize: '17px',
        color: 'white',
        textDecoration: 'none',
        padding: '.5rem 1 rem',
    },
    navLinksv2: {
        fontSize: '17px',
        color: 'Grey',
        textDecoration: 'none',
        padding: '.5rem 1 rem',
    },
}))