import { Box, Container } from "@mui/system";
import { Stack, Typography } from "@mui/material";
// import LargeButton from "../Components/UI/LargeButton";
import LinkButton from "../Components/UI/LinkButton";

const Payment = () => {
    return (
        <Container
        maxWidth="sm"
        sx={{ height: "100vh", boxSizing: "border-box", paddingTop: "5rem" }}>
  
      <Stack justifyContent="space-around" alignItems="center" alignContent="center" gap={2}>
        <Box sx={{ width: "auto", height: "auto" }}>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png"
            alt="checked"
            height="50px"
            width="50px"
          />
        </Box>

        <Typography Variant="p" sx={{ fontSize: "0.9rem" }}>STEP <strong>3</strong> OF <strong>3</strong></Typography>
        <Typography Variant="p" sx={{ fontSize: "2rem", fontWeight: "bolder" , textAlign:'center'}}>Set up your payment</Typography>
        <Typography variant="p" component='div' sx={{fontSize:'1rem' , color:'#333' , textAlign:'center'}}>Your membership starts<br/>as soon as you set up payment.</Typography>
        <Typography variant="p" component='div' sx={{fontSize:'1.2rem' , color:'#333' , textAlign:'center' , fontWeight:'bold'}}>No commitments.<br/>Cancel online anytime.</Typography>


            <Box sx={{marginTop:'2rem'}}>
            {/* <LargeButton link='/' text='Next'  /> */}
            <LinkButton />
            </Box>
            
      </Stack>
    </Container>
    );
};

export default Payment;