import React, { useEffect, useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Paper, TextField, Grid } from "@mui/material";
import App from "../App.css";
import { HiBackspace } from "react-icons/hi";
import axios from 'axios';

const Details = () => {
  const navigate=useNavigate();
  console.log("method called");
  const [gender, setgender] = useState("");
  const[age,setage]=useState('');
  const [seats, setseats] = useState("");
  const[category,setcategory]=useState("");
  const { eventid } = useParams();
  const [eventdata, seteventdata] = useState({});
  const paperstyle = { padding: 20, width: 340, margin: "0px auto" };
  const radiostyle = { margin: "1rem 0" };
  const Categorystyle = { margin: "1rem 0" };
  const agestyle ={margin:'1rem 0'}
  const seatsstyle = { margin: "1rem 0" };
  const btnstyle1 = { margin: "2rem 0" };
  const btnstyle2 = { margin: "2rem" };


  const handleSubmit=(e)=>{
    
    const userid=localStorage.getItem('userid');
    console.log(eventid);
    e.preventDefault();
    const bookingdata={
       gender:gender+'',
       age:age+'',
       seats:seats+'',
       category:category+'',
       userId:userid,
       eventId:eventid

    }
    console.log(bookingdata);
    const res=axios.post('https://localhost:7246/api/Event/bookingdata',bookingdata);
    alert("saved successfully");
    console.log(res);
    navigate('/bookinghistory');
  };

  
  useEffect(() => {
    fetch("https://localhost:7246/api/Event/eventlist?id=" + eventid)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        seteventdata(res[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="maindiv">
      <div className="listofevents">
        {eventdata && (
          <div>
            <h4>
              Event Datas : <p>{eventdata.id}</p>
            </h4>
            <h5>venue :       {eventdata.venue}</h5>
            <h5>EventName:    {eventdata.eventname}</h5>
            <h5>Date:         {eventdata.date}</h5>
            <h5>Time:         {eventdata.time}</h5>
          </div>
        )}
      </div>
      <div className="subdiv">
        <form onSubmit={handleSubmit}>
          <Grid style={{marginTop:"100px"}}>
            <Paper elevation={15} style={paperstyle}>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="gender"
                  value={gender}
                  onChange={(e)=>setgender(e.target.value)}
                  style={radiostyle}
                >
                  <FormControlLabel
                  name="gender"
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                  name="gender"
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
              <Box sx={{ minWidth: 120 }}>
             <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          name="age"
          id="demo-simple-select"
          value={age}
          label="Age"
          style={agestyle}
          onChange={(e)=>setage(e.target.value)}
        >
          <MenuItem value={20}>Below 20</MenuItem>
          <MenuItem value={30}>Between 20-30</MenuItem>
          <MenuItem value={35}>Above 30</MenuItem>
        </Select>
      </FormControl>
    </Box>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category of Seats
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    name="category"
                    label="Category of Seats"
                    style={Categorystyle}
                    onChange={(e)=>setcategory(e.target.value)}
                  >
                    <MenuItem value="Platinum-$=300">Platinum-$300</MenuItem>
                    <MenuItem value="Gold-$150">Gold-$150</MenuItem>
                    <MenuItem value="Silver-$100">Silver-$100</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <TextField
                label="No.of.Seats"
                placeholder="fill the seats"
                fullWidth
                required
                value={seats}
                style={seatsstyle}
                name="seats"
                onChange={(e)=>setseats(e.target.value)}
              />

              <Stack direction="row" spacing={2}>
               <Link to='/Main'><Button
                  variant="contained"
                  style={btnstyle1}
                  endIcon={<HiBackspace />}
                >Back
                </Button></Link> 
                  
                <Button
                  type="submit"
                  variant="contained"
                  style={btnstyle2}
                  endIcon={<SendIcon />}
                >
                  Book Now
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default Details;
