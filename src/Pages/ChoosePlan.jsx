import { Container, Box, Stack, Typography } from "@mui/material";
import TableComponent from "../Components/UI/TableComponent";
import { Button } from '@mui/material'
import { styled } from "@mui/material/styles";
import {Link} from 'react-router-dom';
// import LargeButton from "../Components/UI/LargeButton";
import { useSelector, useDispatch } from "react-redux";
import { choosePlan } from "../Redux/middleware/UserDataActions";



const StyledLargeButton = styled(Button)(({ theme }) => ({
    color: "#fff",
    backgroundColor: "#12C6B2",
    fontWeight: "500px",
    fontSize: "24px",
    minHeight: "64px",
    borderRadius: "4px",
    padding: "0.75rem 25.333px",
    width: "350px",
  
    "&:hover": {
      backgroundColor: "#12C6B2",
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


const ChoosePlan = () => {
  const Dispatch = useDispatch();

  const planChosen = useSelector((state) => state.planChosen);
  const userPlan = useSelector((state) =>  state.userPlan );
  const planError = useSelector( (state) => state.error );

  const choosePlanHandler = () => {

    Dispatch(choosePlan({ plan: userPlan }));
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        color: "#FFFFFF",
        backgroundImage:
          "linear-gradient(to bottom, rgba(7, 9, 17, 0.8) 5.88%, rgba(7, 9, 17, 0) 34.09%, rgba(7, 9, 17, 0) 99.57%)",
      }}
    >
      <Box sx={{ height: "100vh", padding: "2rem" }}>
        <Stack justifyContent="space-around" alignItems="flex-start" gap={1}>
          <Typography
            variant="h3"
            component="div"
            sx={{ fontSize: "2rem", fontWeight: "bold" }}
          >
            Choose the plan that’s right for you
          </Typography>
          <Typography
            Variant="p"
            component="div"
            sx={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.8)" }}
          >
            just a few more steps and you're done!We hate paperwork, too.
          </Typography>

          <Stack
            justifyContent="space-around"
            alignItems="flex-start"
            sx={{ width: "100%", marginTop: "3rem" }}
          >
            <TableComponent />
          </Stack>

          <Stack
            sx={{ width: "100%", margin: "1rem" }}
            justifyContent="center"
            alignItems="center"
          >
            {" "}
            {planChosen && (
              <StyledLink to={ !planError && '/payment'} onClick={choosePlanHandler}>
                <StyledLargeButton
                  size="large"
                  sx={{
                    minWidth: {
                      lg: "400px",
                      md: "300px",
                      sm: "auto",
                      xs: "auto",
                    },
                    height: { md: "64px", sm: "40px", sx: "auto" },
                    padding: {
                      lg: "0.75rem 25.333px",
                      md: "0.5rem 20px",
                      sm: "0.3rem 15px",
                      sx: "0.1rem 5px",
                    },
                  }}
                >
                  Next
                </StyledLargeButton>
              </StyledLink>
            )}
          </Stack>

          {planError && <Typography variant="p">{planError}</Typography>}
        </Stack>
      </Box>
    </Container>
  );
};

export default ChoosePlan;
