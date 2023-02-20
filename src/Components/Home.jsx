import React, { useEffect } from "react";
import "./home.css";
import video3 from "../Assets/video3.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import axios from "axios";
import Typical from "react-typical";

const Home = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="home" id="home">
      <div className="overlay"></div>
      <video src={video3} muted autoPlay loop type="video/mp4" />
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
          <Typical
              steps={["Our Packages",500]}
              loop={Infinity}
              wrapper="p"
            />
          </span>

          <h2 data-aos="fade-up" className="homeTitle">
            <Typical
              steps={["Search Your Events",500]}
              loop={Infinity}
              wrapper="p"
            />
          </h2>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your Events Venue</label>
            <div className="input flex">
              <input
                type="text"
                placeholder="Enter name here 
                    ...."
              />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select your date :</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price :</label>

              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>
          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTER</span>
          </div>
        </div>
        <div className="main-card">
          <div className="head">
            <h1>Best Price Guarantee</h1>
            <p>
              Unlock Our best Price Guarantee in or AkbarEventsPlans become a
              VIP
            </p>
            <a
              href="https://kw.akbartravels.com/DubaiTourPackage/DubaiTourDetails?id=DXBPKG009"
              target="_blank"
            >
              <button className="trans">Learn More</button>
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <SiTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
