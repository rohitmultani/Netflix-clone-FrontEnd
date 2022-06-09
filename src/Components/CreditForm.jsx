import { Box, Button, TextField, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthenticationSliceActions } from "../Redux/AuthenticationSlice";
import { UserRegisterHandler } from "../Redux/middleware/UserDataActions";
import "./style.css";

const LargeButton = styled(Button)(({ theme }) => ({
  minWidth: { lg: "350px", md: "300px", sm: "auto", xs: "auto" },
  height: { md: "64px", sm: "40px", sx: "auto" },
  padding: {
    lg: "0.75rem 25.333px",
    md: "0.5rem 20px",
    sm: "0.3rem 15px",
    sx: "0.1rem 5px",
  },
  color: "#fff",
  backgroundColor: "#12C6B2",
  fontWeight: "500px",
  fontSize: "24px",
  minHeight: "64px",
  borderRadius: "4px",
  marginTop: "2rem",
  // padding: "0.75rem 25.333px",
  Width: "350px",

  "&:hover": {
    backgroundColor: "#169889",
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
  const [Cvv, setCvvIsValid] = useState(false);
  const [FormIsValid, setFormIsValid] = useState(false);
  const Dispatch = useDispatch();

  const validate = (values) => {
    const errors = {
      FirstName: "",
      LastName: "",
      CardNumber: "",
      phoneNumber: "",
      CVV: "",
    };

    if (!values.FirstName.trim()) {
      errors.FirstName = "Required";
      setFirstNameIsValid(false);
    } else if (isFinite(values.FirstName)) {
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
      errors.phoneNumber = "Invalid Phone Number";
      setPhoneNumberIsValid(false);
    } else {
      setPhoneNumberIsValid(true);
    }

    if (!values.CardNumber) {
      errors.CardNumber = "Required";
      setCardNumberIsValid(false);
    } else if (values.CardNumber.length !== 15) {
      errors.CardNumber = "Card Number should be 15 digits";
      setCardNumberIsValid(false);
    } else if (!isFinite(values.CardNumber)) {
      errors.CardNumber = "Invalid Card Number";
      setCardNumberIsValid(false);
    } else if (!isFinite(values.CardNumber)) {
      errors.CardNumber = "Invalid Card Number";
      setCardNumberIsValid(false);
    } else {
      setCardNumberIsValid(true);
    }

    if (!values.CVV) {
      errors.CVV = "Required";
      setCvvIsValid(false);
    } else if (values.CVV.length !== 3) {
      errors.CVV = "CVV should be 3 digits";
      setCvvIsValid(false);
    } else if (!isFinite(values.CVV)) {
      errors.CVV = "Invalid CVV Number";
      setCvvIsValid(false);
    } else if (!isFinite(values.CVV)) {
      errors.CVV = "Invalid CVV Number";
      setCvvIsValid(false);
    } else {
      setCvvIsValid(true);
    }

    console.log(
      FirstNameIsValid,
      LastNameIsValid,
      CardNumberIsValid,
      PhoneNumberIsValid,
      Cvv
    );
    if (
      FirstNameIsValid &&
      LastNameIsValid &&
      CardNumberIsValid &&
      PhoneNumberIsValid &&
      Cvv
    ) {
      setFormIsValid(true);
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      CardNumber: "",
      phoneNumber: "",
      CVV: "",
    },
    validate,
    onSubmit: () => {},
  });

  const submitonHandler = (event) => {
    console.log(formik.values);
    event.preventDefault();
    if (FormIsValid) {
      Dispatch(
        AuthenticationSliceActions.SetUserData({
          FirstName: formik.values.FirstName,
          LastName: formik.values.LastName,
          CardNumber: formik.values.CardNumber,
          phoneNumber: formik.values.phoneNumber,
        })
      );
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
        alignItems: "center",
        marginTop: "1rem",
      }}
    >
      <TextField
        required
        id="FirstName"
        label="FirstName"
        color="secondary"
        placeholder="Enter a valid Name"
        sx={{ width: { lg: "450px", md: "300px", sm: "auto", xs: "auto" } }}
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
        color="secondary"
        placeholder="Enter a valid Name"
        sx={{
          width: { lg: "450px", md: "300px", sm: "auto", xs: "auto" },
          marginTop: "0.8rem",
        }}
        onChange={formik.handleChange}
        error={!!formik.errors.LastName && formik.touched.LastName}
        helperText={formik.errors.LastName}
        value={formik.values.LastName}
        onBlur={formik.handleBlur}
      />

      <Stack
        direction="row"
        alignItems="center"
        sx={{ width: "100%", padding: "0px", margin: "0px" }}
        justifyContent="space-around"
        flexWrap="wrap"
      >
        <TextField
          required
          id="CardNumber"
          label="CardNumber"
          color="secondary"
          placeholder="Enter a valid Name"
          sx={{
            width: { lg: "300px", md: "200px", sm: "150px", xs: "222px" },
            marginTop: "0.8rem",
            marginRight: { sm: "0.1rem", lg: "0.5rem" },
          }}
          onChange={formik.handleChange}
          error={!!formik.errors.CardNumber && formik.touched.CardNumber}
          helperText={formik.errors.CardNumber}
          value={formik.values.CardNumber}
          onBlur={formik.handleBlur}
        />

        <TextField
          required
          id="CVV"
          label="CVV"
          color="secondary"
          placeholder="CVV"
          sx={{
            width: { lg: "140px", md: "100px", sm: "70px", xs: "222px" },
            marginTop: "0.8rem",
          }}
          onChange={formik.handleChange}
          error={!!formik.errors.CVV && formik.touched.CVV}
          helperText={formik.errors.CVV}
          value={formik.values.CVV}
          onBlur={formik.handleBlur}
        />
      </Stack>

      <TextField
        required
        id="phoneNumber"
        label="phoneNumber"
        color="secondary"
        placeholder="Enter a valid Number"
        sx={{
          width: { lg: "450px", md: "300px", sm: "auto", xs: "auto" },
          marginTop: "0.8rem",
        }}
        onChange={formik.handleChange}
        error={!!formik.errors.phoneNumber && formik.touched.phoneNumber}
        helperText={formik.errors.phoneNumber}
        value={formik.values.phoneNumber}
        onBlur={formik.handleBlur}
        inputProps={{ placeholder: { color: "yellow" } }}
      />

      <LargeButton
        type="submit"
        size="large"
        onClick={submitonHandler}
        sx={{ minWidth: { lg: "450px", md: "300px", sm: "auto", xs: "auto" } }}
      >
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
