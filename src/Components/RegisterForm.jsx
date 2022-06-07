import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { AuthenticationSliceActions } from '../Redux/AuthenticationSlice'

const LargeButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#e50914",
  fontWeight: "500px",
  fontSize: "24px",
  minHeight: "64px",
  borderRadius: "4px",
  padding: "0.75rem 25.333px",
  width: "450px",
  marginTop: "20px",
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
  const Dispatch = useDispatch()

  const submitonHandler = (event) => {
    event.preventDefault();
    if (FormIsValid) {
      Dispatch(AuthenticationSliceActions.SignUp({Email:formik.values.Email , Password: formik.values.Password}))
    }
  };

  const validate = (values) => {
    const errors = {
      Email: "",
      Password: "",
    };

    if (!values.Email.trim()) {
      errors.Email = "Required";
      setEmailIsValid(false);
    } else if (!values.Email.includes("@")) {
      errors.Email = "Invalid email address";
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
    }

    if (!values.Password) {
      errors.Password = "Required";
      setPasswordIsValid(false);
    } else if (values.Password.length < 5) {
      errors.Password = "minium password is 5 digits";
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
      Email: "",
      Password: "",
    },
    validate,
    onSubmit: submitonHandler,
  });

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
      <TextField
        required
        id="Email"
        label="Email"
        placeholder="Enter a valid Email"
        sx={{ width: "450px" }}
        onChange={formik.handleChange}
        error={!!formik.errors.Email && formik.touched.Email}
        helperText={formik.errors.Email}
        value={formik.values.Email}
        onBlur={formik.handleBlur}
      />

      <TextField
        required
        id="Password"
        label="password"
        placeholder="Enter a valid password"
        sx={{ width: "450px", marginTop: "0.8rem" }}
        onChange={formik.handleChange}
        error={!!formik.errors.Password && formik.touched.Password}
        helperText={formik.errors.Password}
        value={formik.values.Password}
        onBlur={formik.handleBlur}
      />

      <LargeButton type="submit" size="large" onClick={submitonHandler}>
        <StyledLink
          to={FormIsValid && "/chooseplan"}
          style={{ color: "white", textDecoration: "none" }}
        >
          Next
        </StyledLink>
      </LargeButton>
    </Box>
  );
};

export default RegisterForm;
