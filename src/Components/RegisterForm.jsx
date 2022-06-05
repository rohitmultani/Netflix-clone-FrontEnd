import {  Box, Button , TextField} from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useFormik } from "formik";
import { useState } from "react";

const LargeButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#e50914",
  fontWeight: "500px",
  fontSize: "24px",
  minHeight: "64px",
  borderRadius: "4px",
  padding: "0.75rem 25.333px",
  width: "450px",
  marginTop:'20px',
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

const RegisterForm = () => {
  const [EmailIsValid, setEmailIsValid] = useState(false);
  const [PasswordIsValid, setPasswordIsValid] = useState(false);
  const [FormIsValid, setFormIsValid] = useState(false);

  const validate = (values) => {
      console.log(values)
    const errors = {
      email: "",
      password: "",
    };

    if (!values.email.trim()) {
      errors.email = "Required";
      setEmailIsValid(false);
    } else if (!values.email.includes("@")) {
      errors.email = "Invalid email address";
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
    }

    if (!values.password) {
      errors.password = "Required";
      setPasswordIsValid(false);
    } else if (values.password.length < 5) {
      errors.password = "minium password is 4 digits";
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
    }

    if (EmailIsValid && PasswordIsValid) {
      setFormIsValid(true);
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate ,
    onSubmit: (values) => {
    console.log('form sub')
    },
  });

  const submitonHandler = (event) => {
    event.preventDefault();
    console.log("Button submit");
    console.log(formik.errors);
    console.log(formik.values)
  };

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
        marginTop: "1rem",
      }}
    >
      {/* <TextField
        // id="outlined-basic"
        label="Email"
        helperText={formik.errors.email}
        error={!!formik.errors.email && formik.touched.email}
        variant="outlined"
        required
        onChange={formik.handleChange}
        value={formik.values.email}
        sx={{ width: "450px" }}
      /> */}

         <TextField
          required
          id="Email"
          label="Email"
          placeholder="Enter a valid Email"
          sx={{ width: "450px" }}
          onChange={formik.handleChange}
          error={!!formik.errors.email && formik.touched.email}
          helperText={formik.errors.email}
          value={formik.values.email}
        />

      {/* <TextField
        // id="outlined-basic"
        label="password"
        helperText={formik.errors.password}
        variant="outlined"
        error={!!formik.errors.password && formik.touched.password}
        required
        onChange={formik.handleChange}
        value={formik.values.password}
        sx={{ width: "450px", marginTop: "0.8rem" }}
      /> */}


         <TextField
          required
          id="password"
          label="password"
          placeholder="Enter a valid password"
          sx={{ width: "450px", marginTop: "0.8rem" }}
          onChange={formik.handleChange}
          error={!!formik.errors.password && formik.touched.password}
          helperText={formik.errors.password}
          value={formik.values.password}
        />

      <LargeButton type="submit" size="large" onClick={submitonHandler} >
    
        <StyledLink
          to={FormIsValid && "/"}
          style={{ color: "white", textDecoration: "none" }}
        >
          Next
        </StyledLink>
      </LargeButton>
    </Box>
  );
};

export default RegisterForm;
