import { Typography } from '@mui/material';
import { Container, Box } from '@mui/system';
import clockIcon from '../../../assets/icons/clock.svg'
import map from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import React from 'react';

const boxStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    maxWidth: 320
}

const Info = () => {
    return (
        <Box sx={{ mt: -10, mb: 5 }}>
            <Container>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Box item xs={12} md={3}
                        sx={{ m: 1, p: 2, borderRadius: 2 }}
                        style={{
                            ...boxStyle,
                            backgroundColor: "#5CE7ED"
                        }}>

                        <Box sx={{ mr: 1 }}>
                            <img src={clockIcon} alt="clock icon" />
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 600 }} variant='h6'>
                                Opening Hours
                            </Typography>

                            <Typography sx={{ fontSize: 15 }} variant='caption'>
                                9:00 AM To 10:00PM
                            </Typography>
                        </Box>

                    </Box>

                    <Box item xs={12} md={3}
                        sx={{ m: 1, p: 2, borderRadius: 2 }}
                        style={{
                            ...boxStyle,
                            backgroundColor: "#3A4256",
                            color: 'white'
                        }}>
                        <Box sx={{ mr: 1 }}>
                            <img src={map} alt="map icon" />
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 600 }} variant='h6'>
                                Visit Our Location
                            </Typography>

                            <Typography sx={{ fontSize: 15 }} variant='caption'>
                                22/A Tejgaon, Dhaka
                            </Typography>
                        </Box>
                    </Box>

                    <Box item xs={12} md={3}
                        sx={{ m: 1, p: 2, borderRadius: 2 }}
                        style={{
                            ...boxStyle,
                            backgroundColor: "#19D3AE"
                        }}>
                        <Box sx={{ mr: 1 }}>
                            <img src={phone} alt="phone icon" />
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 600 }} variant='h6'>
                                Contact Us Now
                            </Typography>

                            <Typography sx={{ fontSize: 15 }} variant='caption'>
                                +880 1680386886
                            </Typography>
                        </Box>
                    </Box>

                </Box>
            </Container >
        </Box >
    );
};

export default Info;