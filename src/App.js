import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Signup from './Components/Signup';
import Login from './Components/Login';
import Contact from './Components/Contact';
import Admin from './Components/Admin';
import AddEvents  from "./Components/AddEvents";
import ViewBooking from "./Components/ViewBooking";
import BookingHistory from "./Components/BookingHistory";
 import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
 import Bottom from "./Components/Bottom";
import Details from './Components/Details';
import  EditEvents from './Components/EditEvents';




function App() {
  return (
    <>
     
     
     <Router>
       
     <Navbar/>
     
       <Routes>
         
       <Route path="/" element={<Home/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/Login" element={<Login/>}/>
         <Route path='/Admin' element={<Admin/>}/>
          <Route path="/addevent" element={<AddEvents/>}/>
           <Route path='/Details/:eventid' element={<Details/>}/>
           <Route path='/EditEvents/:eventid' element={<EditEvents/>}/> 
         <Route path="/viewbooking" element={<ViewBooking/>}/>
         <Route path="/bookinghistory" element={<BookingHistory/>}/>
         <Route path="/contactus" element={<Contact/>}/>
         <Route path="/Main" element={<Main/>}/>
         <Route path="/footer" element={<Footer/>}/>
         
         
       </Routes>
       
       <Bottom/>
        
     </Router> 
     
      
      
    </>
  );
}

export default App;
