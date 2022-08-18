import React from 'react';
import { Container, Grid } from '@mui/material';
import Calendar from '../../Shared/Navigation/Calendar/Calendar';


const AppointmentHeaders = ({ date, setDate }) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calendar date={date} setDate={setDate}></Calendar>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src='https://www.picktime.com/webassets/2021/img/picktime-hero-new.svg' alt="appointment svg" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeaders;