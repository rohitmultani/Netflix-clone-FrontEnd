import { Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fa } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/system";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const StyledButton = styled(Button)(({ theme }) => ({
  border: "1px solid #333",
  padding: "1rem 2.5rem",
  color: "#333",
  fontSize: "1rem",
  fontWeight: "900px",
}));

const StyledContainer = styled(Box)(({theme}) => ({
width:'auto' , 
height:'auto',
margin:'auto',
padding:'0px',
 '& img':{
     width:'40px',
     height:'40px'
 }
}))



const LinkStyle = { textDecoration: "none" };

const LinkButton = () => {
  return (
    <Link to="/creditcard" style={LinkStyle}>
      <StyledButton>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={5}>
         
          <Typography variant="p" component='span'>Credit or Debit Card</Typography>
          <StyledContainer component='span' ><img src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg' alt="visa" /></StyledContainer>
        
         
        <ArrowForwardIosIcon />
         
        </Stack>
      </StyledButton>
    </Link>
  );
};

export default LinkButton;
