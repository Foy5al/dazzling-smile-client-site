import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import loginImg from '../../../assets/images/login.png';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password is not matched')
            return;
        }
        e.preventDefault();
    }
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>

                        <Typography gutterBottom variant="body1" sx={{ textAlign: 'center', mt: 5 }}>
                            Register
                        </Typography>

                        <form onSubmit={handleLoginSubmit}
                            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                            <TextField
                                onChange={handleOnChange}
                                sx={{ width: "100%", m: 1 }}
                                id="standard-basic" label="Email Address"
                                name='eamil'
                                type='email'
                                variant="standard" />

                            <TextField
                                onChange={handleOnChange}
                                sx={{ width: "100%", m: 1 }}
                                id="standard-basic" label="Password"
                                name="password"
                                type="password" variant="standard"
                            />

                            <TextField
                                onChange={handleOnChange}
                                sx={{ width: "100%", m: 1 }}
                                id="standard-basic" label="Confirm Password"
                                name="password2"
                                type="password" variant="standard"
                            />

                            <Box>
                                <Button type='submit' variant="contained" sx={{ width: '50%', mt: 5, mb: 5 }}>Register</Button>
                            </Box>
                        </form>

                        <NavLink style={{ textDecoration: 'none' }} to='/login'>
                            <Button variant="text">Already register? please login Now</Button>
                        </NavLink>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <img style={{ width: "100%" }} src={loginImg} alt="login" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Register;