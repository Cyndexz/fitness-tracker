import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar:{
        display: 'flex',
        flexDirection: 'row',
        padding: '10px',
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
        fontSize: '18px',
        color: 'white',
        textDecoration: 'none',
        padding: '.5rem 1 rem',
    },
    navLinksv2: {
        fontSize: '17px',
        color: 'Black',
        textDecoration: 'none',
        padding: '.5rem 1 rem',
    },
    navLinksv3: {
        fontSize: '25px',
        fontFamily: 'Play',
        color: 'grey',
        textDecoration: 'none',
        padding: '.5rem 1 rem',
    },
    appSpace:{
        paddingTop: '56px',
    },
    signIn:{
        float: 'right',
    },
}))