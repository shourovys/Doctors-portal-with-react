import React from 'react';
import './AppointmentsCart.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
});

const AppointmentsCart = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root} className='AppointmentCard'>

            <Typography variant="h5" component="h2" className='primary-color h-third'>
                Teeth Wash
                 </Typography>
            <Typography className={classes.pos} component="h5">
                10.00AM - 11.00AM
                 </Typography>
            <Typography variant="body2" className='paragraph' component="p">
                10 SPENCES AVAILABLE
                </Typography>


            <CardActions>
                <PrimaryBtn id='cardBtn'>BOOK APPOINTMENT</PrimaryBtn>
            </CardActions>
        </Card>
    );
}
export default AppointmentsCart;