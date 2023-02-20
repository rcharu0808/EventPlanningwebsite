import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import React from "react";
import { CheckBox } from "@mui/icons-material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import axios from 'axios';

const Signup = () => {
  const paperstyle = { padding: 20, width: 340, margin: "0px auto" };
  const headstyle = { margin: "0" };
  const avatarstyle = { backgroundColor: "#3792cb" };
  const textstyle = { margin: "10px 0" };
  const initialValues = {
    Name: "",
    PhoneNo: "",
    Mail: "",
    Password: "",
    termandcondition: true,
  };
  const validationSchema = Yup.object().shape({
    Name: Yup.string().min(2, "It's too short").required("Required"),
    PhoneNo: Yup.number()
      .typeError("Invalid Phone Number")
      .required("Required"),
    Mail: Yup.string().email("Invalid email").required("Required"),
    Password: Yup.string()
      .min(8, "Minimum length should be 8")
      .required("Required"),
    termandcondition: Yup.string().oneOf(["true"], "Accept terms & conditions")
  });
  const onSubmit = (values, props) => {
    const registerData={
      Name:values.Name+'',
   PhoneNo:values.PhoneNo+'',
   Mail:values.Mail+'',
   Role:'User',
   Password:values.Password+''
    };
   console.log(registerData);
    try{
      const res=axios.post('https://localhost:7246/api/User/Register',registerData);
      console.log(res);
      window.location.href='http://localhost:3000/login';
    } catch(error){
      console.log(error);
    }
    
    
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  return (
    <Grid style={{marginTop:"100px",zIndex: "-1 !important",
    position:" relative"}}>
      <Paper elevation={15} style={paperstyle}>
        <Grid align="center">
          <Avatar style={avatarstyle}>
            <AccessibilityNewIcon />
          </Avatar>

          <h2 style={headstyle}>Sign up</h2>
          <Typography variant="caption">
            Please fill this form to create an account
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <Grid>
                <Field
                  as={TextField}
                  label="Name"
                  placeholder="enter your name"
                  fullWidth
                  required
                  style={textstyle}
                  name="Name"
                  helperText={<ErrorMessage name="Name" />}
                />
                <Field
                  as={TextField}
                  label="PhoneNo"
                  placeholder="enter your PhoneNo"
                  fullWidth
                  required
                  name="PhoneNo"
                  style={textstyle}
                  helperText={<ErrorMessage name="PhoneNo" />}
                />
                <Field
                  as={TextField}
                  label="Email"
                  type="email"
                  placeholder="enter your email"
                  fullWidth
                  required
                  name="Mail"
                  helperText={<ErrorMessage name="Mail" />}
                />
                <Field
                  as={TextField}
                  label="Password"
                  type="password"
                  placeholder="enter your password"
                  fullWidth
                  required
                  name="Password"
                  style={textstyle}
                  helperText={<ErrorMessage name="Password" />}
                />
                <FormControlLabel
                  control={
                    <Field
                      as={CheckBox}
                      color="primary"
                      fullWidth
                      required
                      style={textstyle}
                      name="termandcondition"
                    />
                  }
                  label="I accept the terms & conditions"
                />
                <FormHelperText>
                  <ErrorMessage name="termandcondition" />
                </FormHelperText>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={textstyle}
                  disabled={props.isSubmitting}
                >
                  {props.isSubmitting ? "loading" : "Sign Up"}
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Signup;
