import React, { useEffect } from "react";
import "./footer.css";
import video4 from "../Assets/video4.mp4";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
// import { FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="footer" id="Footer">
      <div className="videoDiv">
        <video src={video4} loop autoPlay muted type="video/mp4" />
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Plan Event with us</h2>
          </div>
          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />
            <a href="mysupport@akbartravels.com">
              <button data-aos="fade-up" className="btn flex" type="submit">
                SEND <FiSend className="icon" />
              </button>
            </a>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                Events
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              Bring People Together in a Virtual Event to Celebrate and Take
              Action for Our Blue Planet. Pledge To Make More Sustainable
              Choices For Our Ocean. Learn More And Plan An Event Today!
              Subscribe for Updates. Looking for a One-Stop Solution for
              Hosting/ Organising any Business Event ? We are Here to Help to
              Accomplish your wishes & need by our Extradinory Plans by Akbar
              Teams
            </div>
            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            {/* group one */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR Events</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                AllHand Team Meetup
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Birthday
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Anniversery
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Marriage
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Puberty
              </li>
            </div>
            {/* Group two */}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
            </div>
            {/* group three */}
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Foods
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Accomodations
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Photography
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Costume Designer
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Hall Arrangements
              </li>
            </div>
          </div>
          <div data-aos-duration="4000" className="footerDiv flex">
            <small>BEST EVENTS PLANNER CONTACT US</small>
            <small>@COPYRIGHTS RESERVED - AkbarEvents</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

