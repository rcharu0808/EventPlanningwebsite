import {useEffect, useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditEvents = () => {
    
    const { eventid } = useParams();
  const [eventdata, seteventdata] = useState({});
  useEffect(() => {
    fetch("https://localhost:7246/api/Event/eventlist?id=" +eventid)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res[0]);
        seteventid(res[0].id);
        setVenue(res[0].venue);
        seteventname(res[0].eventname);
        setdate(res[0].date);
        settime(res[0].time);
        setactive(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },[]);
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
        //    console.log({id,venue,eventname,date,time,active})
        const eventdata={venue,eventname,date,time};
        console.log(eventdata);
        fetch("https://localhost:7246/api/Event/updateevent?id=" +eventid,{
       method:"PATCH",
       headers:{"content-type":"application/json"},
       body:JSON.stringify(eventdata)
        }).then((res)=>{
              alert("saved successfully");
              navigate('/Admin');
        }).catch((err)=>{
      console.log(err.message);
        })
    }
  

  return (
    <div>
      <div className="row">
        <div className="offser-lg-3 col-lg-6">
          <form className="container1" onSubmit={handleSubmit}>
            <div className="card" style={{textAlign:"left",margin:'auto'}}>
              <div className="card-title">
                <h2>Edit the Events</h2>
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
                      <input required value={venue} onMouseDown ={e=>setvalidate(true)} onChange={e=>setVenue(e.target.value)} className="form-control"></input>
                     {venue.length==0 && validation && <span className="text-danger">Mention the Venue</span>}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>EventName</label>
                      <input required value={eventname} onChange={e=>seteventname(e.target.value)} className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Date</label>
                      <input required value={date} onChange={e=>setdate(e.target.value)} className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Time</label>
                      <input required value={time} onChange={e=>settime(e.target.value)} className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-check">
                      <label className="form-check-label">Is Active</label>
                      <input checked={active} onChange={e=>setactive(e.target.checked)} type="checkbox" className="form-check-input"></input>
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
  )
}

export default EditEvents
