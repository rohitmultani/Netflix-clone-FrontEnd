import { Box, Button, TextField, Typography  } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import {UserRegisterHandler} from '../Redux/middleware/UserDataActions'
import "./Styles/style.css"

const LargeButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#12C6B2",
  fontWeight: "500px",
  fontSize: "24px",
  minHeight:  "64px" ,
  borderRadius: "4px",
  padding: "0.75rem 25.333px"  ,
  Width: "450px" ,
  marginTop: "20px",
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

const RegisterForm = ({classes}) => {
  const [EmailIsValid, setEmailIsValid] = useState(false);
  const [PasswordIsValid, setPasswordIsValid] = useState(false);
  const [FormIsValid, setFormIsValid] = useState(false);
  const Dispatch = useDispatch();
  const requestError = useSelector((state) => state.error);

  const submitonHandler = (event) => {
    event.preventDefault();
    if (FormIsValid) {
      console.log('com dispatch');  
      Dispatch(
        UserRegisterHandler({
          Email: formik.values.Email,
          Password: formik.values.Password,
        })
      );
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
        alignItems: "center",
        marginTop: "1rem",
      }}
    >
      <TextField
        required
        id="Email"
        label="Email"
        color="secondary"
        placeholder="Enter a valid Email"
        InputLabelProps={{ style: { color: "white" } }}

        sx={{
          width: {lg:"450px" , md:'300px' , sm:'auto' , xs:'auto'},
          color: "white",
          '&::placeholder':{
            color:'white'
          }
        }}
        onChange={formik.handleChange}
        error={!!formik.errors.Email && formik.touched.Email}
        helperText={formik.errors.Email}
        value={formik.values.Email}
        onBlur={formik.handleBlur}
        FormHelperTextProps={{ style: { background: "transparent" , color:'secondary' } }}
      />

      <TextField
        required
        id="Password"
        label="password"
        color="secondary"
        placeholder="Enter a valid password"
        InputLabelProps={{ style: { color: "white" } }}
        sx={{ width: {lg:"450px" , md:'300px' , sm:'auto' , xs:'auto'}, marginTop: "0.8rem" }}
        onChange={formik.handleChange}
        error={!!formik.errors.Password && formik.touched.Password}
        helperText={formik.errors.Password}
        value={formik.values.Password}
        onBlur={formik.handleBlur}
        FormHelperTextProps={{ style: { backgroundColor: "transparent" } }}
      />



      <LargeButton type="submit" size="large" onClick={submitonHandler} sx={{  minWidth: {lg:'450px' ,md:'300px' , sm:'auto' , xs:'auto'} ,   height: { md:'64px' , sm:'40px' , sx:'auto'} ,  padding: { lg:"0.75rem 25.333px" , md:'0.5rem 20px' , sm:'0.3rem 15px' , sx:'0.1rem 5px' } }} >
        <StyledLink
          to={FormIsValid && !requestError && "/chooseplan"}
          style={{ color: "white", textDecoration: "none" }}
        >
          Next
        </StyledLink>
      </LargeButton>

      { requestError && <Typography variant='body1' component='p' >{requestError}</Typography>}
    </Box>
  );
};

export default RegisterForm;
