import { Avatar, Box, Chip, Container, Divider, Grid, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import footerImg from '../../../assets/images/footer.png'
import logo from '../../../assets/images/doctor-small.png'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { blue } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Footer.css';



const footerBgStyle = {
    background: `url(${footerImg})`,
    backgroundRepeat: 'no-repeat',
}

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

// copyright function for generate year automatically
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Developed with 🖤 by '}
            <strong><a className='text-style' href="https://dev-foysal.netlify.app/" target="_blank" rel="noreferrer noopener">Mohammd Foysal</a> </strong>{'Copyright ©'}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Footer = () => {
    return (
        <Box style={footerBgStyle} className='sticky-container' sx={{ mt: 5, pb: 2, top: 'auto' }}>
            <Container maxWidth="xl">

                <Grid container
                    spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid sx={{ m: 'auto' }} item xs={12} sm={6} md={4}>
                        <Box>
                            <Typography
                                variant="h6"
                                component="div"
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
                            > <Avatar sx={{ mt: 1, mb: 1, mr: 1, bgcolor: 'white' }}>
                                    <img style={{ width: 45 }} src={logo} alt="logo" />
                                </Avatar>
                                Doctors Portal
                            </Typography>
                            <Divider />
                        </Box>

                        <Stack direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={1} >
                            <Avatar sx={{ mt: 1, bgcolor: blue[500] }}>
                                <LocationOnIcon />
                            </Avatar><span>Tejgaon I/A, Dhaka-1208</span>
                        </Stack >

                        <Stack direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={1} >
                            <Avatar sx={{ mb: 1, mt: 1, bgcolor: blue[500] }}>
                                <EmailIcon />
                            </Avatar>
                            <a className='text-style' href="mailto:mh.foysal.h@gmail.com">
                                mh.foysal.h@gmail.com
                            </a>
                        </Stack >

                        <Stack direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={1} >
                            <Avatar sx={{ mb: 1, bgcolor: blue[500] }}>
                                <CallIcon />
                            </Avatar>
                            <a className='text-style' href="tel:01680xxx86">
                                01680xxx86
                            </a>
                        </Stack >


                    </Grid>

                    {/* ----------service part ---------------*/}
                    <Grid item xs={12} sm={4}>
                        <Root>
                            <Divider>
                                <Chip label="Our Services" />
                            </Divider>
                        </Root>

                        <Box sx={{ p: 2 }}><NavLink className='text-style' to='/doctors#doctors' color='inherit'>Find a Doctor</NavLink></Box>

                        <Box sx={{ p: 2 }}><NavLink className='text-style' to='/services#services' color='inherit'>All services</NavLink></Box>

                        <Box sx={{ p: 2 }}><NavLink className='text-style' to='/appointment#appointment' color='inherit'>Make An Appointment</NavLink></Box>

                        <Box sx={{ p: 2 }}><NavLink className='text-style' to='/register' color='inherit'>Register For Service </NavLink></Box>
                    </Grid>

                    {/* ----------social media part ------------*/}

                    <Grid item xs={12} sm={4}>
                        <Root>
                            <Divider>
                                <Chip label="Find us on social media" />
                            </Divider>
                        </Root>

                        <Stack direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={1} >
                            <Avatar sx={{ mb: 1, mt: 1, bgcolor: blue[500] }}>
                                <FacebookIcon />
                            </Avatar>
                            <a className='text-style' href="https://www.facebook.com/iamfoysal.h" target="_blank" rel="noopener noreferrer" >
                                Foysal on Facebook
                            </a>
                        </Stack >

                        <Stack direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={1} >
                            <Avatar sx={{ mb: 1, bgcolor: blue[500] }}>
                                <LinkedInIcon />
                            </Avatar>
                            <a className='text-style' href="https://www.linkedin.com/in/md-foysal-h/" target="_blank" rel="noopener noreferrer" >
                                Foysal on LinkedIn
                            </a>
                        </Stack >

                        <Stack direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={1} >
                            <Avatar sx={{ mb: 1, bgcolor: blue[500] }}>
                                <GitHubIcon />
                            </Avatar>
                            <a className='text-style' href="https://github.com/Foy5al" target="_blank" rel="noopener noreferrer" >
                                Foysal on GitHub
                            </a>
                        </Stack >


                    </Grid>

                </Grid>
                <Divider sx={{ mb: 2 }} />
                <Copyright sx={{ mt: 5 }} />

            </Container >

        </Box>
    );
};

export default Footer;