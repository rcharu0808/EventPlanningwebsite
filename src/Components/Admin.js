import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const [eventdata, seteventdata] = useState(null);
  const navigate=useNavigate();
  const LoadDetails=(id)=>{
    navigate("/Details/"+id);
  }
  const LoadEdit=(id)=>{
    navigate("/EditEvents/"+id);

  }
  const RemoveFunction=(id)=>{
    if(window.confirm('Do you want to remove?')){
        fetch("https://localhost:7246/api/Event/deleteevent?id="+id,{
       method:"DELETE"
        }).then((res)=>{
              alert("Removed successfully");
              window.location.reload();
        }).catch((err)=>{
      console.log(err.message);
        })
    }
  
  }

  useEffect(() => {
    fetch(" https://localhost:7246/api/Event/eventlist")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        seteventdata(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container1">
      <div className="card" style={{margintop:"100px"}}>
        <div className="card-title">
          <h2>Add Events </h2>
        </div>
        <div className="card-body">
            <div className="divbtn" style={{float:"left"}}>
                <Link to='/addevent' className="btn btn-success">Add New Event</Link>
                <Link to='/viewbooking' className="btn btn-primary">View Booking</Link>
            </div>

          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Venue</td>
                <td>EventName</td>
                <td>Date</td>
                <td>Time</td>
                <td>Action by Admin</td>
              </tr>
            </thead>
            <tbody>
              {eventdata &&
                eventdata.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.venue}</td>
                    <td>{item.eventname}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>
                      <a onClick={()=>{LoadEdit(item.id)}} className="btn btn-success">Edit</a>
                      <a onClick={()=>{RemoveFunction(item.id)}}className="btn btn-danger">Remove</a>
                      <a onClick={()=>{LoadDetails(item.id)}} className="btn btn-primary">Details</a>
                    
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
