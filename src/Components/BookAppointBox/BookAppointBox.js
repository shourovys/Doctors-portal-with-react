import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import BookAppointForm from '../BookAppointForm/BookAppointForm';
import './BookAppointBox.css'

const BookAppointBox = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="BookAppointBox">
            <Button variant="outlined" className='primaryBtn' id='cardBtn' onClick={handleClickOpen}>
                BOOK APPOINTMENT
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className='dialog-box'
            >
                <DialogTitle className='primary-color .h-third text-center' id="alert-dialog-title">{props.appointType}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">

                        <BookAppointForm appointId={props.appointId} handleClose={handleClose} />

                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}
export default BookAppointBox;