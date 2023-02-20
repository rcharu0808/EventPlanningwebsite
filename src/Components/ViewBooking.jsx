import React,{useEffect, useState} from 'react'


const ViewBooking = () => {
  const [bookingdata, setbookdata] = useState(null);
  useEffect(() => {
    
    fetch(" https://localhost:7246/api/Event/bookingdata")
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
  return (
    <div className="container3">
      <div className="card">
        <div className="card-title">
          <h2>View Booking Page</h2>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-light text-black">
              <tr>
                <td>BookId</td>
                <td>BookedUser</td>
                <td>Venue</td>
                <td>EventName</td>
                <td>Category</td>
                <td>No.of.seats Filled</td>
              </tr>
            </thead>
            <tbody>
              {bookingdata &&
                bookingdata.map(item => (
                  <tr key={item.id}>
                    <td>{item.bookId}</td>
                    <td>{item.Name}</td>
                    <td>{item.venue}</td>
                    <td>{item.eventname}</td>
                    <td>{item.category}</td>
                    <td>{item.seats}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ViewBooking
