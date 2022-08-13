import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import treatmentImg from '../../../assets/images/treatment.png';

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center'

}
const Treatment = () => {
    return (
        <Container>
            <Grid sx={{ ...verticalCenter, py: 5 }} container spacing={2}>
                <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                    <img
                        style={{ maxWidth: '75%', maxHeight: 550, borderRadius: 5 }}
                        src={treatmentImg} alt="Treatment_Img" />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 600, fontSize: 40 }} variant='h4' component='h4'>
                        Exceptional Dental Care, <br /> on Your Terms
                    </Typography>

                    <Typography variant='caption' component='div' sx={{ my: 3 }}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                    </Typography>

                    <Button sx={{ backgroundColor: '#5CE7ED' }} variant='contained'>
                        Get Started
                    </Button>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Treatment;