import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontic',
        time: '8:00 AM - 9:00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '5:00 PM - 6:30 PM',
        space: 10,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '8:00 AM - 9:00 AM',
        space: 10,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '7:00 AM - 8:30 AM',
        space: 10,
    },
    {
        id: 5,
        name: 'Teeth Orthodontic',
        time: '8:00 AM - 9:00 AM',
        space: 10,
    },
    {
        id: 6,
        name: 'Teeth Orthodontic',
        time: '8:00 AM - 9:00 AM',
        space: 10,
    }
]
const AvailableAppointments = ({ date }) => {
    return (
        <Container>
            <Typography variant='h4' sx={{ color: 'info.main', my: 3, textAlign: 'center' }}>Available Appointments on {date.toDateString()}</Typography>

            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        bookings={booking}
                        date={date}
                    />)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;