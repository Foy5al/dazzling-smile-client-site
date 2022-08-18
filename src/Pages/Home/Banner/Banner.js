import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import bg from '../../../assets/images/bg.png';

const bannerBg = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 550,
    justifyItems: 'center'

}

const Banner = () => {
    return (
        <Box style={bannerBg} >
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid style={verticalCenter} item xs={12} md={6}>

                        <Box>
                            <Typography variant='h3'>
                                Your New Smile <br /> Starts Here
                            </Typography>

                            <Typography variant='h6' sx={{ my: 3, fontSize: 14, fontWeight: 300, color: 'gray' }}>
                                The Doctor's Portal helps health organization that seeks quality of care excellence by providing Tools that lets physicians and practices to measure themselves against a set of Indices set by the organization, tools to optimize their practices and being compliant to the organization guidelines and statistics.
                            </Typography>

                            <Button sx={{ backgroundColor: '#5CE7ED' }} variant='contained'>
                                Get Appointment
                            </Button>
                        </Box>

                    </Grid>

                    <Grid style={verticalCenter} item xs={12} md={6}>
                        <img style={{ width: "100%" }} src='https://www.picktime.com/webassets/2021/img/Video-meeting-integration-img.svg' alt="banner img" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;