import React, { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { MdOutlineCardTravel } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const isloged=localStorage.getItem('isLoged')??false;
  const userRole=localStorage.getItem('role');
  const navigate=useNavigate();
  console.log(userRole);
  console.log(isloged);
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const removeNavbar = () => {
    setActive("navBar");
  };
  function logout(){
    localStorage.clear();
    navigate('/');
  }
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1 className="titleakbar">
              {/* <MdOutlineCardTravel className="icon2"/> */}
              <img src="https://media.glassdoor.com/sqll/4306160/akbar-offshore-squareLogo-1668151267204.png" style={{width:50,borderRadius:'50px'}}></img>
              AkbarEvents
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists grid">
            {!isloged?<li className="navItem">
              <Link to="/signup" className="navLink">
                SignUp
              </Link>
            </li>:<a></a>}
            {!isloged?<li className="navItem">
              <Link to="/Login" className="navLink">
                Login
              </Link>
            </li>:<a></a>}
            {isloged ? <li className="navItem">
              <a href="/" className="navLink">
                Home
              </a>
            </li>:<a></a>}
            {isloged&&(userRole=='User')?<li className="navItem">
              <a href="/Main" className="navLink">
                Events
              </a>
            </li>:<a></a>}
            {isloged&&(userRole!=null&&userRole=='Admin')?<li className="navItem">
              <a href="/Admin" className="navLink">
                Admin
              </a>
            </li>:<a></a>}
            <li className="navItem">
              <a href="/footer" className="navLink">
                About
              </a>
            </li>
            
            <li className="navItem">
              <Link to="/contactus" className="navLink">
                Contact
              </Link>
            </li>
            {isloged ? <li className="navItem">
              <button className="logout" onClick={logout}>Logout</button>
            </li>:<a></a>}
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
