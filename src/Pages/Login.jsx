import { Container , Stack, Typography } from '@mui/material';
import LoginForm from '../Components/LoginForm';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const Login = () => {
    return (
        <Container
        maxWidth="sm"
        sx={{ height: "100vh", boxSizing: "border-box", paddingTop: "5rem" , textAlign:'center  ' ,  backgroundColor:'rgba(7, 9, 17, 0.7)', marginBottom:'3rem'}}>
            
            <Stack justifyContent='space-around' alignItems='center' alignContent='flex-start'  gap={2} sx={{maxWidth:'450px' , marginLeft:'2rem' , color:'#FFFFFF'}}>
            <Typography variant='p' sx={{fontSize: "1rem" , textAlign:'left' , color:'rgb(255 255 255 / 85%)' }} >STEP 1 OF 3</Typography>
            <Typography variant='h4' sx={{  fontWeight:'bold' , textAlign:'left'}}>Sign In</Typography>
            <LoginForm />
            <Stack direction='row' gap={1}>
            <Typography variant='p' sx={{  fontSize:'1.2rem' , fontFamily:'sans-serif' , textAlign:'left' , color:'#c4c4c4d9'}} >New to Netflix?</Typography>
            <Typography variant='p' sx={{  fontSize:'1.2rem' , fontFamily:'sans-serif' , textAlign:'left' , color:'#FFFFFF'}} ><StyledLink to='/setup' style={{ color: "white", textDecoration: "none" }}>Sign up now.</StyledLink></Typography>
            </Stack>
            </Stack>
           
        </Container>
    );
};

export default Login;