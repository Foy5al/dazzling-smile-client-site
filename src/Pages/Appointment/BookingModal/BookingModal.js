import React from 'react';
import { Button, Fade, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Backdrop from '@mui/material/Backdrop';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #5CE7ED',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
    const { name, time, space } = booking;
    const handleBookingSubmit = e => {
        alert('submitting');

        //collect data
        handleBookingClose();
        e.preventDefault();
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h5" component="h2">
                        {name}
                    </Typography>

                    <form onSubmit={handleBookingSubmit}>
                        <TextField sx={{ width: '90%', m: 1 }}
                            disabled
                            defaultValue={date.toDateString()}
                            id="outlined-basic" label="Booking Date" variant="outlined" />

                        <TextField sx={{ width: '90%', m: 1 }} id="outlined-basic" label="Your Name" variant="outlined"
                        />

                        <TextField sx={{ width: '90%', m: 1 }} id="outlined-basic" label="Email"
                            variant="outlined" />

                        <TextField sx={{ width: '90%', m: 1 }} id="outlined-basic" label="Phone no"
                            variant="outlined" />

                        <Button
                            type='submit'
                            variant='contained'>Book Now</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>

    );
};

export default BookingModal;