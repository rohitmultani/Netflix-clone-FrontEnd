import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import {  useFormik } from "formik";
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

const CreditForm = () => {
    const [FirstNameIsValid, setFirstNameIsValid] = useState(false);
    const [LastNameIsValid, setLastNameIsValid] = useState(false);
    const [CardNumberIsValid, setCardNumberIsValid] = useState(false);  
    const [PhoneNumberIsValid, setPhoneNumberIsValid] = useState(false);  
    const [FormIsValid , setFormIsValid] = useState(false)
    const Dispatch = useDispatch()
  
 
  
    const validate = (values) => {
      const errors = {
        FirstName: "",
        LastName: "",
        CardNumber:"",
        phoneNumber:""
      };
  
      if (!values.FirstName.trim()) {
        errors.FirstName = "Required";
        setFirstNameIsValid(false);
      } else if ( isFinite(values.FirstName) ) {
        errors.FirstName = "Invalid Name";
        setFirstNameIsValid(false);
      } else {
        setFirstNameIsValid(true);
      }


      if (!values.LastName.trim()) {
        errors.LastName = "Required";
        setLastNameIsValid(false);
      } else if (isFinite(values.LastName)) {
        errors.LastName = "Invalid Name";
        setLastNameIsValid(false);
      } else {
        setLastNameIsValid(true);
      }
  
      if (!values.phoneNumber) {
        errors.phoneNumber = "Required";
        setPhoneNumberIsValid(false);
      } else if (values.phoneNumber.length !== 12) {
        errors.phoneNumber = "minium Phone Number is 12 digits";
        setPhoneNumberIsValid(false);
      } else if (!isFinite(values.phoneNumber)) {
        errors.phoneNumber = "Invalid Phone Number"
        setPhoneNumberIsValid(false);
      }else {
        setPhoneNumberIsValid(true);
      }


      if (!values.CardNumber) {
        errors.CardNumber = "Required";
        setCardNumberIsValid(false);
      } else if (values.CardNumber.length !== 15) {
        errors.CardNumber = "minium Card Number is 15 digits";
        setCardNumberIsValid(false);
      }else if (!isFinite(values.CardNumber)) {
        errors.CardNumber = "Invalid Card Number"
        setCardNumberIsValid(false);
      }else if (!isFinite(values.CardNumber)) {
        errors.CardNumber = "Invalid Card Number"
        setCardNumberIsValid(false);
      } 
      else {
        setCardNumberIsValid(true);
      }

  console.log(FirstNameIsValid , LastNameIsValid , CardNumberIsValid , PhoneNumberIsValid );
      if (FirstNameIsValid && LastNameIsValid && CardNumberIsValid && PhoneNumberIsValid) {
        setFormIsValid(true);
      }
      return errors;
    };
  


    const formik = useFormik({
      initialValues: {
        FirstName: "",
        LastName: "",
        CardNumber:"",
        phoneNumber:""
      },
      validate,
      onSubmit: () => {
    
      },
    });



    const submitonHandler = (event) => {
        console.log('checked' , FormIsValid)
        event.preventDefault();
        if (FormIsValid) {
         Dispatch(AuthenticationSliceActions.SetUserData({FirstName: formik.values.FirstName , LastName: formik.values.LastName , CardNumber:  formik.values.CardNumber , phoneNumber: formik.values.phoneNumber}))
        }
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
      <TextField
        required
        id="FirstName"
        label="FirstName"
        placeholder="Enter a valid Name"
        sx={{ width: "450px" }}
        onChange={formik.handleChange}
        error={!!formik.errors.FirstName && formik.touched.FirstName}
        helperText={formik.errors.FirstName}
        value={formik.values.FirstName}
        onBlur={formik.handleBlur}
      />

      <TextField
        required
        id="LastName"
        label="LastName"
        placeholder="Enter a valid Name"
        sx={{ width: "450px", marginTop: "0.8rem" }}
        onChange={formik.handleChange}
        error={!!formik.errors.LastName && formik.touched.LastName}
        helperText={formik.errors.LastName}
        value={formik.values.LastName}
        onBlur={formik.handleBlur}
      />



      <TextField
        required
        id="CardNumber"
        label="CardNumber"
        placeholder="Enter a valid Name"
        sx={{ width: "450px", marginTop: "0.8rem" }}
        onChange={formik.handleChange}
        error={!!formik.errors.CardNumber && formik.touched.CardNumber}
        helperText={formik.errors.CardNumber}
        value={formik.values.CardNumber}
        onBlur={formik.handleBlur}
      />


      <TextField
        required
        id="phoneNumber"
        label="phoneNumber"
        placeholder="Enter a valid Number"
        sx={{ width: "450px", marginTop: "0.8rem" }}
        onChange={formik.handleChange}
        error={!!formik.errors.phoneNumber && formik.touched.phoneNumber}
        helperText={formik.errors.phoneNumber}
        value={formik.values.phoneNumber}
        onBlur={formik.handleBlur}
      />

      <LargeButton type="submit" size="large" onClick={submitonHandler}>
        <StyledLink
          to={FormIsValid && "/login"}
          style={{ color: "white", textDecoration: "none" }}
        >
          Next
        </StyledLink>
      </LargeButton>



    </Box>
    );
};

export default CreditForm;