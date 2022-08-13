import React from 'react';
import { Box, Button, Checkbox, Container, FormControlLabel, Grid, TextareaAutosize, TextField, Typography } from '@mui/material';
import contactBg from '../../../assets/images/appointment.png'


const appointmentBg = {
    background: `url(${contactBg})`,
    marginTop: 155
}

const ConnectUs = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant='h6' sx={{ mt: 2, textAlign: 'center', color: '#5CE7ED' }}>
                    Connect Us
                </Typography>

                <Typography sx={{ textAlign: 'center', mt: 3 }} style={{ color: 'white', fontWeight: 600 }} variant='h4'>
                    Stay Connected With Us
                </Typography>


                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container sx={{ p: 2 }} spacing={2}>

                        <Grid sx={{ mb: 2, backgroundColor: 'white', borderRadius: 1 }} xs={12}>
                            <TextField
                                variant="filled"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid sx={{ mb: 2, backgroundColor: 'white', borderRadius: 1 }} xs={12}>
                            <TextField
                                variant="filled"
                                required
                                fullWidth
                                name="Subject"
                                label="Subject"
                                type="text"
                                id="Subject"
                            />
                        </Grid>
                        <Grid sx={{ mb: 2 }} xs={12}>
                            <TextareaAutosize
                                maxRows={4}
                                aria-label="maximum height"
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua."
                                style={{ minWidth: '100%', height: 80, borderRadius: 5 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                sx={{ color: 'white' }}
                                control={<Checkbox sx={{
                                    color: 'white'
                                }} value="allowExtraEmails"
                                    defaultChecked color="success" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />

                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'flex-end' }} item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mb: 2, width: 200, color: 'black', backgroundColor: '#5CE7ED' }}
                            >
                                Send
                            </Button>
                        </Grid>

                    </Grid>
                </Box>

            </Container>
        </Box>
    );
};

export default ConnectUs;