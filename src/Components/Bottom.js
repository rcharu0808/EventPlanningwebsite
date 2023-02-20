import "./Bottom.css";
import React from "react";
import { FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Bottom = () => {
  return (
    <div className="under">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#296d98",marginRight:"2rem" }}/>
                    <div className='head1'>
                        <p>Akbar Event Planners</p>
                        <p>Bangalore 604-202</p>
                    </div>
                </div>
                <div className="phone">
                    <p>
                    <FaPhone size={20} style={{color:"#296d98",marginRight:"2rem"}}/>
                    +91-9924263490
                    </p>
                </div>
                <div className="mailid">
                <FaMailBulk size={20} style={{color:"#296d98",marginRight:"2rem"}}/>
                    <p className="mp">
                    
                    akbareventplans@gmail.com
                    </p>
                </div>
            </div>
            <div className="right">
                <div className="para">
                <p>Follow our Social Medias</p>
                <p>We will be there to book your favourite events</p>
                <p>Gaze our Profile !</p>
                </div>
                
                 <div className="social">
                  
                  <p>Click Here</p>
                  <FaLinkedin size={25} style={{color:"#296d98",marginright:"1rem"}}/>
                 </div>
            </div>
        </div>
    </div>
  
  );
};

export default Bottom;
