import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sbi48p6",
        "template_60bzr6l",
        form.current,
        "R7p6N3arNjbCKLMO4"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const btncolor = { background: "#235284", color: "white" };
  const textstyle = { color: "white", fontSize: "30px", marginLeft: "20rem" };
  return (
    <div id="Contact" className="Contact">
      <Card style={{ maxWidth: 450, marginLeft: "50px", padding: "5px 5px" ,marginTop:"85px"}}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            send a query to akbareventplans@gmail.com
          </Typography>
          <Stack spacing={1}>
            <Rating name="size-large" defaultValue={2} size="large" />
          </Stack>
          <Typography gutterBottom color="textSecondary" variant="body2">
            Fill up our form and team will get back to you within 24 hours
          </Typography>
          <form ref={form} onSubmit={sendEmail}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  label="Your Name"
                  placeholder="Enter the name"
                  variant="outlined"
                  fullWidth
                  required
                  name="user_name"
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  label=" Your Email"
                  placeholder="Enter your Email"
                  variant="outlined"
                  fullWidth
                  required
                  name="user_mail"
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Message Us"
                  multiline
                  rows={4}
                  placeholder="Enter your Feedback"
                  variant="outlined"
                  fullWidth
                  required
                  name="message"
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="container"
                  style={btncolor}
                  fullWidth
                  value="Send"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Contact;
