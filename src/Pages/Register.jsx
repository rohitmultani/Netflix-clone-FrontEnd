import React from 'react';
import { Container , Stack, Typography } from '@mui/material';
import RegisterForm from '../Components/RegisterForm';

const Register = () => {
    return (
        <Container
        maxWidth="sm"
        sx={{ height: "100vh", boxSizing: "border-box", paddingTop: "6rem" }}
      >
            <Stack justifyContent='space-around' alignItems='flex-start' alignContent='flex-start' gap={2} >
            <Typography variant='p' sx={{fontSize: "1rem" , textAlign:'left'  }} >STEP 1 OF 3</Typography>
            <Typography variant='h4' sx={{fontWeight:'bold' }}>Create a password to start <br/> your membership</Typography>
            <Typography variant='p' sx={{fontSize:'1.2rem' , fontFamily:'sans-serif'}} >Just a few more steps and you're done!<br/>We hate paperwork, too.</Typography>
            </Stack>
            <RegisterForm />
        </Container>
    );
};

export default Register;