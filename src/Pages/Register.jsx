import React from 'react';
import { Container , Stack, Typography } from '@mui/material';
import RegisterForm from '../Components/RegisterForm';

const Register = () => {
    return (
        <Container
        maxWidth="sm"
        sx={{ height: "100vh", boxSizing: "border-box", paddingTop: "5rem" , textAlign:'left' }}>
            <Stack justifyContent='space-around' alignItems='flex-start' alignContent='flex-start'  gap={2} sx={{maxWidth:'450px' , marginLeft:'2rem'}}>
            <Typography variant='p' sx={{fontSize: "1rem" , textAlign:'left'  }} >STEP 1 OF 3</Typography>
            <Typography variant='h4' sx={{  fontWeight:'bold' , textAlign:'left'}}>Create a password to start <br/> your membership</Typography>
            <Typography variant='p' sx={{  fontSize:'1.2rem' , fontFamily:'sans-serif' , textAlign:'left'}} >Just a few more steps and you're done!<br/>We hate paperwork, too.</Typography>
            <RegisterForm />
            </Stack>
           
        </Container>
    );
};

export default Register;