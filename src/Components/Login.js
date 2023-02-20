import { CheckBox, LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Button,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
} from "@mui/material";

import React from "react";
import * as Yup from 'yup';
import { Formik, Form,Field,ErrorMessage } from "formik";
import axios from 'axios';


const Login = ({ handleChange }) => {
  const paperstyle = {
    padding: 20,
    height: "60vh",
    width: 340,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#3792cb" };
  const btnstyle = { margin: "8px 0" };
  const pwdstyle = { margin: "8px 0" };
  
  const initialValues={
    Mail:'',
    Password:'',
    remember:false


  }
  const validationSchema=Yup.object().shape({
    Mail:Yup.string().email('please enter valid email').required("Required"),
    Password:Yup.string().required("Required")
  })

  const onSubmit= async (values,props)=>{
    const loginData={
   Mail:values.Mail+'',
   Password:values.Password+''
    };
    try{
      const res= await axios.post('https://localhost:7246/api/User/Login',loginData,{
        headers: {
          'Content-Type': 'application/json'
          
        }
      });
      //console.log(res);
      
      const parsedata=JSON.parse(res.data);
      //console.log(parsedata);
      if(parsedata.length>0){
        localStorage.setItem('isLoged',true);
        localStorage.setItem('role',parsedata[0].role);
        localStorage.setItem('userid',parsedata[0].id);
        console.log(parsedata[0].role);
        parsedata[0].role=='Admin'?window.location.href = "http://localhost:3000/Admin":window.location.href = "http://localhost:3000/Main"
      } else{
        window.location.href = "http://localhost:3000/signup";
        
        
      }
      //console.log(res);
      
    } catch(error){
      console.log(error);
    }
    
    
  }
  return (
    <div>
      <Grid style={{marginTop:"100px"}}>
        <Paper elevation={10} style={paperstyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlined />
            </Avatar>
            <h2>Login</h2>
          </Grid>

          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {(props) => (
              <Form>
                
                <Field as={TextField}
                  label="Email-Id"
                  placeholder="Enter Your Mail"
                 
                  fullWidth
                  required
                  name="Mail"
                  helperText={<ErrorMessage name="Mail"/>}
                />
                <Field as={TextField}
                  label="Password"
                  placeholder="Enter Your Password"
                  type="password"
                  fullWidth
                  required
                  name="Password"
                  style={pwdstyle}
                  helperText={<ErrorMessage name="Password" />}
                />
                <Field as ={FormControlLabel}
                name="remember"
                  control={<CheckBox  color="primary" />}
                  label="Remember me" 
                />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  disabled={props.isSubmitting}
                  style={btnstyle}
                  fullWidth>
                  {props.isSubmitting?"Loading":"Sign In"}
                 
                  
                
                  
                </Button>
              </Form>
            )}
          </Formik>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography>
            {" "}
            Do you have an account?
            <Link
              href="#"
              onClick={() => {
                handleChange("event", 1);
              }}
            >
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
