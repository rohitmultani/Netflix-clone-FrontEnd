import React from "react";
import { Box, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
text-decoration: none;

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`;

const NavBar = () => {
  return (
    <Box
      variant="header"
      sx={{
        height: "4rem",
        marginLeft: "auto",
        marginRight: "auto",
        background: "transparent",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <Box variant="div" sx={{ width: "100%", height: "100%" }}>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{
              width: "100%",
              fontWeight: "bold",
              height: "100%",
              paddingLeft: "3rem",
              color: "red",
            }}
          >
            john
          </Stack>
        </Box>
        <Box variant="div" sx={{ width: "100%", height: "100%" }}>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            sx={{
              height: "100%",
              paddingRight: "3rem",
              textDecoration: "none !important",
            }}
          >
            <StyledLink to="/Setup" >
              
              <Button
                variant="contained"
                color="error"
                sx={{ textDecoration: 'none !important' , color:'black' }}
              >
                Sign in
              </Button>
            </StyledLink>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default NavBar;
