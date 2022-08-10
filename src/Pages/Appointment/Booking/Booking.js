import React from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ bookings, date }) => {
    const { name, time, space } = bookings;

    const [openBooking, setOpenBooking] = React.useState(false);
    const handleOpenBooking = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
            <Grid item xs={12} md={6} lg={4}>
                <Paper elevation={3} sx={{ py: 5, textAlign: 'center' }}>

                    <Typography variant='h5' gutterBottom component='div' sx={{ color: 'info.main', fontWeight: 600 }}>
                        {name}
                    </Typography>

                    <Typography variant='h6' gutterBottom component='div'>
                        {time}
                    </Typography>

                    <Typography variant='caption' display='block' gutterBottom >
                        {space} Space Available
                    </Typography>

                    <Button onClick={handleOpenBooking} variant='contained'>Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal
                booking={bookings}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                date={date}
            />
        </>
    );
};

export default Booking;