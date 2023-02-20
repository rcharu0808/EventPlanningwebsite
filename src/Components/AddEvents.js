import React, { useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const AddEvents = () => {
    const[id,seteventid]=useState("");
    const[venue,setVenue]=useState("");
    const[eventname,seteventname]=useState("");
    const[date,setdate]=useState("");
    const[time,settime]=useState("");
    const[active,setactive]=useState(true);
    const[validation,setvalidate]=useState(false);
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
          e.preventDefault();
          //console.log(venue);
        // const eventdata={venue,eventname,date,time,active};

        const eventdata={
      venue:venue+'',
   eventname:eventname+'',
   date:date+'',
   time:time+''
    };
  // const eventdata={};
  console.log(eventdata);
    const res=axios.post('https://localhost:7246/api/Event/events',eventdata);
    alert("saved successfully");
    console.log(res);
  }

  return (
    <div>
      <div className="row">
        <div className="offser-lg-3 col-lg-6">
        
          <form className="container1" onSubmit={handleSubmit}>
            <div className="card" style={{textAlign:"left",margin:'auto'}}>
              <div className="card-title">
                <h2>Add the New event</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input value={id} disabled="disabled" className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Venue</label>
                      <input required value={venue} className="form-control" name="venue" onChange={(e)=>setVenue(e.target.value)}></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>EventName</label>
                      <input required value={eventname} name="eventname" className="form-control" onChange={(e)=>seteventname(e.target.value)}></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Date</label>
                      <input required value={date} name="date" className="form-control" onChange={(e)=>setdate(e.target.value)}></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Time</label>
                      <input required value={time} name="time" className="form-control" onChange={(e)=>settime(e.target.value)}></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-check">
                      <label className="form-check-label">Is Active</label>
                      <input checked={active} type="checkbox" className="form-check-input" onChange={(e)=>setactive(e.target.value)}></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit"> save changes</button>
                      <Link to="/Admin" className="btn btn-danger">Back to AddEvent</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
      
        </div>
      </div>
    </div>
  );
};

export default AddEvents;
