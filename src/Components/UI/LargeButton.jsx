import { Button } from '@mui/material'
import { styled } from "@mui/material/styles";
import {Link} from 'react-router-dom';

const StyledLargeButton = styled(Button)(({ theme }) => ({
    color: "#fff",
    backgroundColor: "#e50914",
    fontWeight: "500px",
    fontSize: "24px",
    minHeight: "64px",
    borderRadius: "4px",
    padding: "0.75rem 25.333px",
    width: "350px",
  
    "&:hover": {
      backgroundColor: "#f6121d",
    },
  }));
  
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

const LargeButton = ({link , text , size}) => {
    return (
        <StyledLink to={link}>
        <StyledLargeButton size="large">{text}</StyledLargeButton>
      </StyledLink>
    );
};

export default LargeButton;