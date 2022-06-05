import { Stack, Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { styled } from "@mui/material/styles";
import LargeButton from "../Components/UI/LargeButton";

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "260px",
  height: "100px",

  "& img": {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  width: "300px",
  "& p": {
    marginBottom: "0.3rem",
    textAlign: "center",
  },
}));

const Setup = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ height: "100vh", boxSizing: "border-box", paddingTop: "6rem" }}
    >
      <Stack justifyContent="center" alignItems="center" gap={1}>
        <ImageContainer>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
            alt="devices"
          />
        </ImageContainer>
        <TextContainer
          Variant="section"
          sx={{ textAlign: "center", width: "350px" }}
        >
          <Typography Variant="p" sx={{ fontSize: "1rem" }}>
            STEP 1 OF 3
          </Typography>
          <Typography Variant="p" sx={{ fontSize: "2rem", fontWeight: "bold" }}>
            Finish setting up your account
          </Typography>
          <Typography
            Variant="p"
            sx={{
              fontSize: "1.2rem",
              paddingRight: "1rem",
              paddingLeft: "1rem",
            }}
          >
            Netflix is personalized for you. Create a password to watch on any
            device at any time.
          </Typography>
        </TextContainer>

        <LargeButton link="/register" text="Next" />
      </Stack>
    </Container>
  );
};

export default Setup;
