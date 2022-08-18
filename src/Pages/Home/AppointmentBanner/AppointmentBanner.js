import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import bg from '../../../assets/images/appointBanner.png';
import { Container } from '@mui/system';

const appointmentBg = {
    background: `url(${bg})`,
    marginTop: 155
}

const AppointmentBanner = () => {

    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: 400, marginTop: '-100px' }}
                            src='https://www.picktime.com/webassets/2021/img/Online-booking-img.svg'
                            alt="appointment img" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ pb: 2, display: 'flex', alignItems: 'center' }} >
                        <Box>
                            <Typography variant='h6' sx={{ color: '#5CE7ED' }}>
                                Appointment
                            </Typography>

                            <Typography sx={{ color: 'secondary.main', mt: 3 }} style={{ fontWeight: 600 }} variant='h4'>
                                Make an Appointment <br /> Today
                            </Typography>

                            <Typography sx={{ my: 3 }} style={{ color: 'white', fontWeight: 300, fontSize: 14 }} variant='h6'>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at it's picture
                            </Typography>

                            <Button sx={{ backgroundColor: '#5CE7ED' }} variant='contained'>
                                Learn More
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;