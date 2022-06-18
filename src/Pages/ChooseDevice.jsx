import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box, Container  } from '@mui/system';
import React from 'react';
import classes from  '../Components/Styles/devices.module.css' ;
import Device from '../Components/UI/Device';



const ChooseDevice = () => {
    return (
        <Container maxWidth="lg" sx={{color:'#FFFFFF' , backgroundImage:'linear-gradient(to bottom, rgba(7, 9, 17, 0.8) 5.88%, rgba(7, 9, 17, 0) 34.09%, rgba(7, 9, 17, 0) 99.57%)' , marginTop:'2rem'}} >
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} >
             <Box>
                
        <Typography Variant="p" sx={{ fontSize: "0.9rem" , color:'#C8CAD2' }}>STEP <strong>5</strong> OF <strong>5</strong></Typography>
        <Typography Variant="p" sx={{ fontSize: "2rem", fontWeight: "bolder"}}>What devices will<br/> you be watching<br/> on?</Typography>
        <Typography variant="p" component='div' sx={{fontSize:'1rem' , color:'#C8CAD2'}}>you can watch Netflix on any of these devices.<Typography  variant="p" component='div' sx={{fontSize:'1rem' , color:'#FFFFFF' , fontWeight:'bold'}}>Select all that apply</Typography></Typography>

             </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
             {/* nested grid */}

             <Grid container  spacing={2} rowGap={2}  alignItems='center' alignContent='center' >
                <Grid item xs={12} md={4} lg={6} className={classes.device}>1</Grid>
                <Grid item xs={12} md={4} lg={6} className={classes.device}>2</Grid>
                <Grid item xs={12} md={4} lg={6} className={classes.device}>3</Grid>
                <Grid item xs={12} md={4} lg={6} className={classes.device}>4</Grid>
                <Grid item xs={12} md={4} lg={6} className={classes.device}>5</Grid>
                <Grid item xs={12} md={4} lg={6} className={classes.device}>6</Grid>

                <Grid item xs={12} textAlign="center" sx={{border:'solid 0.8px #FFFFFF' , padding:'0.5rem' }}>
                    <Typography variant='p' component='p' sx={{fontSize:'1rem' , color:'#FFFFFF'}}>Something Else</Typography>
                    <Typography variant='p' component='p' sx={{fontSize:'1rem' , color:'#C8CAD2'}}>Enjoy Netflix with other internet connection devices</Typography>
                </Grid>

             </Grid>
            </Grid>
            </Grid>
        </Container>
    );
};

export default ChooseDevice;