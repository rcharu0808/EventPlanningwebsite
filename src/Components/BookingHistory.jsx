import React,{useEffect,useState} from 'react'
import { useNavigate} from 'react-router-dom';

const BookingHistory = () => {
  const [bookingdata, setbookdata] = useState(null);
  useEffect(() => {
    const userId=localStorage.getItem('userid');
    
    fetch("https://localhost:7246/api/Event/bookingdata?id="+userId)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setbookdata(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  

    const RemoveFunction=(bookId)=>{
        if(window.confirm('Do you want to remove?')){
            fetch("https://localhost:7246/api/Event/deletebook?bookId="+bookId,{
           method:"DELETE"
            }).then((res)=>{
                  alert("Removed successfully");
                  window.location.reload();
            }).catch((err)=>{
          console.log(err.message);
            })
        }
      
      }
    
  return (
    <div className="container2">
      <div className="card">
        <div className="card-title">
          <h2>Booking History</h2>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-light text-black">
              <tr>
                <td>Booking ID</td>
                <td>Venue</td>
                <td>EventName</td>
                <td>Category</td>
                <td>NO.OF.SEATS</td>
                <td>Action By User</td>
              </tr>
            </thead>
            <tbody>
              {bookingdata &&
                bookingdata.map(item => (
                  <tr key={item.id}>
                    <td>{item.bookId}</td>
                    <td>{item.venue}</td>
                    <td>{item.eventname}</td>
                    <td>{item.category}</td>
                    <td>{item.seats}</td>
                     <td>
                     <a  onClick={()=>{RemoveFunction(item.bookId)}}className="btn btn-danger">Remove Event</a></td> 
                  </tr>
                  
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  )
}

export default BookingHistory
