import React, { useEffect, useState } from "react";
import "./main.css";
import img from "../Assets/img.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import img14 from "../Assets/img14.jpg";
import img5 from "../Assets/img5.jpg";
import img6 from "../Assets/img6.jpg";
import img7 from "../Assets/img7.jpg";
import img18 from "../Assets/img18.jpg";
// import img17 from '../Assets/img17.jpeg';
import img10 from "../Assets/img10.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboardCheck } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import api from "./api/index";
import { Link, useNavigate, useParams } from "react-router-dom";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { BsHeartFill } from "react-icons/bs";

// const Data=[

//   {
//     id:1,
//     imgSrc:img,
//     destTitle:"Bora Bora",
//     location:"New Zealand",
//     grade:"CULTURAL RELAX",
//     fees:"$700",
//     description:"Experience truly unforgettable moments find yourself in lush serenity and sophistication. Qatar's arid scenery, sunny climate, & pristine deserts are a favourite for travellers."
//   },
//   {
//     id:2,
//     imgSrc:img2,
//     destTitle:"Machu Picchu",
//     location:"Peru",
//     grade:"CULTURAL RELAX",
//     fees:"$600",
//     description:"Huayna Picchu, Quechua: Wayna Pikchu, is a mountain in Peru around which the Urubamba River bends. It is located in the Cusco Region, Urubamba Province, ..."
//   },
//   {
//     id:3,
//     imgSrc:img3,
//     destTitle:"Great Barrier Reef",
//     location:"Australia",
//     grade:"CULTURAL RELAX",
//     fees:"$500",
//     description:"The Great Barrier Reef is the world's largest coral reef system composed of over 2,900 individual reefs and 900 islands stretching for over 2,300 kilometres ...."
//   },
//   {
//     id:5,
//     imgSrc:img5,
//     destTitle:"Guanajuato",
//     location:"Mexico",
//     grade:"CULTURAL RELAX",
//     fees:"$1100",
//     description:"Guanajuato is recognized by UNESCO for its signature architecture, silver mines, and deep history.After three trips to Guanajuato and even a monthlong stay, it has easily become one of our favorite places to travel in Mexico."
//   },
//   {
//     id:6,
//     imgSrc:img6,
//     destTitle:"Cinque Terre",
//     location:"Italy",
//     grade:"CULTURAL RELAX",
//     fees:"$840",
//     description:"Cinque Terre comprises five villages – Riomaggiore, Manarola, Corniglia, Vernazza and Monterosso – with 4000 residents living in a beautiful, fragile territory, known as one of the world's most beautiful places for hiking and enjoying Italian village life."
//   },
//   {
//     id:7,
//     imgSrc:img7,
//     destTitle:"Zurich",
//     location:"SwitzerLand",
//     grade:"CULTURAL RELAX",
//     fees:"$840",
//     description:"Though Zurich is one of the more expensive cities to visit in Europe, it's also one of the most beautiful. The views alone – of the old, colorful architecture along the Limmat River, the snow-capped mountains in the distance, and serene Lake Zurich – are reason enough to visit.."
//   },
//   {
//     id:8,
//     imgSrc:img18,
//     destTitle:"Thanjai Big Temple",
//     location:"India",
//     grade:"CULTURAL RELAX",
//     fees:"$300",
//     description:"It highlights the architectural mastery of the Chola era. The Thanjavur temple is mainly dedicated to Lord Shiva because the Raja Raja Cholan is the ardent devotee of Lord Shiva. The great temple was built to signify the Chola's brilliant achievements in architecture, painting, bronze casting and sculpture"
//   },
//   {
//     id:9,
//     imgSrc:img17,
//     destTitle:"Taj Mahal",
//     location:"India",
//     grade:"CULTURAL RELAX",
//     fees:"$400",
//     description:"The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.."
//   },
//   {
//     id:10,
//     imgSrc:img10,
//     destTitle:"Bali Island",
//     location:"Indonesia",
//     grade:"CULTURAL RELAX",
//     fees:"$500",
//     description:"Make sure to plan your Holiday during best time to visit Bali to make the most of it. Right from water sport activities, to vibrant night markets, centuries-old temples, exclusive cave dining options, and romantic sunset walks, the choices for couples are endless."
//   },
// ]

const Main = () => {
  // Create state variables
  const { eventid } = useParams();
  const [responseData, setResponseData] = useState("");
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [posts, setposts] = useState([]);
  const [searchtitle, setsearchtitle] = useState("");
  const LoadDetails = (id) => {
    navigate("/Details/" + id);
  };
  const images = [img, img2, img3, img5, img6, img7, img18, img14, img10];

  // fetches data

  const fetchData = (e) => {
    // e.preventDefault()
    api
      .getData()
      .then((response) => {
        setResponseData(response.data);
        console.log(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const loadposts = async () => {
      setloading(true);
      const response = await axios.get(
        "https://localhost:7246/api/Event/eventlist"
      );
      setposts(response.eventname);
      setloading(false);
    };
    loadposts();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="main container section" id="Main">
      {/* {/* <input
        type="text"
        placeholder="search your events here.."
        onChange={(e) => setsearchtitle(e.target.value)}
      /> */}
      <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 ,margin:'1rem auto'}}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Your Events"
        onChange={(e) => setsearchtitle(e.target.value)}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
       {/* {loading ? (
        <h3>loading...</h3>
      ) : (
        posts
          .filter((value) => {
            if (searchtitle === "") {
              return value;
            } else if (
              value.eventname.toLowercase().includes(searchtitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => <h3>{item.eventname}</h3>)
      )}  */}
      <div className="topic">
      <div data-aos="fade-right" className="setTitle">
        <h3 className="title">Most destination Events</h3>
      </div>
      <Link to='/bookinghistory' className="btn btn-primary">My Booking Page</Link>

      </div>
      
      

      <div className="setContent grid">
        {
          //Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{

          responseData &&
            responseData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  className="singleDestination"
                >
                  <div className="imageDiv">
                    <img src={images[index]} alt={item.eventname} />
                  </div>
                  <div className="cardInfo">
                    <h4 className="destTitle">{item.eventname}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className="icon" />

                      <span className="name">{item.venue}</span>
                    </span>
                    <div className="fees flex">
                      <div className="grade">
                        <span>
                          {item.date}
                          <small>2023</small>
                        </span>
                      </div>
                      <div className="price">
                        <h5>{item.time}</h5>
                      </div>
                    </div>
                    {/* <div className="description">
                      <p>{item.description}</p>
                    </div> */}
                    {/* <button className="btn4 flex">
                      <Link to='/Details' onClick={()=>{LoadDetails(item.id)}}>DETAILS</Link>
                      <BsClipboardCheck className="icon"/>
                    </button> */}
                    <a
                      onClick={() => {
                        LoadDetails(item.id);
                      }}
                      className="btn btn-primary"
                    >
                      Details
                    </a>
                    <BsHeartFill className="hearticon"/>
                    
                  </div>
                </div>
              );
            })
        }
      </div>
    </section>
  );
};

export default Main;
