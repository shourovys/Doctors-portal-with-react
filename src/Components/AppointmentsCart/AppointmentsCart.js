import React from 'react';
import './AppointmentsCart.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import BookAppointBox from '../BookAppointBox/BookAppointBox';

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

const AppointmentsCart = (props) => {
    const { appointType, time, spences, id } = props.appointment



    const classes = useStyles();
    return (
        <Card className={classes.root} className='AppointmentCard'>

            <Typography variant="h5" component="h2" className='primary-color h-third'>
                {appointType}
            </Typography>
            <Typography className={classes.pos} component="h5">
                {time}
            </Typography>
            <Typography variant="body2" className='paragraph' component="p">
                {spences} SPENCES AVAILABLE
            </Typography>


            <CardActions >
                <BookAppointBox appointType={appointType} appointId={id} />
            </CardActions>

        </Card>
    );
}
export default AppointmentsCart;