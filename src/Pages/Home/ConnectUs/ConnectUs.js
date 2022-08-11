import { Box, Button, Checkbox, Container, FormControlLabel, Grid, TextareaAutosize, TextField, Typography } from '@mui/material';
import React from 'react';
import contactBg from '../../../assets/images/appointment.png'


const appointmentBg = {
    background: `url(${contactBg})`,
    marginTop: 155
}

const ConnectUs = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant='h6' sx={{ textAlign: 'center', color: '#5CE7ED' }}>
                    Connect Us
                </Typography>

                <Typography sx={{ textAlign: 'center', mt: 3 }} style={{ color: 'white', fontWeight: 600 }} variant='h4'>
                    Stay Connected With Us
                </Typography>


                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                sx={{ backgroundColor: "white", borderRadius: 2 }}
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                sx={{ backgroundColor: "white", borderRadius: 2 }}
                                required
                                fullWidth
                                name="Subject"
                                label="Subject"
                                type="text"
                                id="Subject"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextareaAutosize
                                maxRows={4}
                                aria-label="maximum height"
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua."
                                style={{ width: '100%', height: 80, borderRadius: 5 }}
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />

                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Send
                    </Button>



                </Box>

            </Container>
        </Box>
    );
};

export default ConnectUs;