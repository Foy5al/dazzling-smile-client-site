import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import loginImg from '../../../assets/images/login.png';

const Login = () => {
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

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography gutterBottom variant="body1" sx={{ textAlign: 'center' }}>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                        <TextField
                            onChange={handleOnChange}
                            sx={{ width: "100%", m: 1 }}
                            id="standard-basic" label="User Name"
                            name='user' variant="standard" />

                        <TextField
                            onChange={handleOnChange}
                            sx={{ width: "100%", m: 1 }}
                            id="standard-basic" label="Password"
                            name="password"
                            type="password" variant="standard"
                        />

                        <Box>
                            <Button type='submit' variant="contained" sx={{ width: '50%', mt: 5 }}>Login</Button>
                        </Box>
                    </form>
                </Grid>

                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={loginImg} alt="login" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;