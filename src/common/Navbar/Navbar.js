import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="container flex_space">
          <div className="meni-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}> </i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <li>
                {" "}
                <Link to="/" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/about" onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/gallery" onClick={closeMobileMenu}>
                  Gallery
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/destination" onClick={closeMobileMenu}>
                Destination
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/blog" onClick={closeMobileMenu}>
                  Blog
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/testimonail" onClick={closeMobileMenu}>
                  Testimonail
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/contact us" onClick={closeMobileMenu}>
                  Contact Us
                </Link>
              </li>
            </li>
          </ul>
          <div className="login-area flex">
            <li>
              <Link to="/sign-in">
                <i className="far fa-chevorn-right">Sign In</i>
              </Link>
            </li>

            <li>
              <Link to="/register">
                <i className="far fa-chevorn-right">Register</i>
              </Link>
            </li>

            <li>
              <Link to="/contact">
                <button className="primary-btn">Request a Quote</button>
              </Link>
            </li>
          </div>
        </div>
      </nav>

      <header>
        <div className="container flex space">
          <div className="logo">
            <img src="images/logo.png" alt="" />
          </div>
          <div className="container flex space">
            <div className="box flex space">
              <div className="icons">
                <i className="far fa-clock"></i>
              </div>
              <div className="text">
                <h4>Working Hours</h4>
                <Link to="/contact">Monday - Sunday: 9.00am to 6.00pn</Link>
              </div>
            </div>
          </div>
          <div className="container flex space">
            <div className="box flex space">
              <div className="icons">
                <i className="fas fa-phone-volume"></i>
              </div>
              <div className="text">
                <h4>Call Us Hours</h4>
                <Link to="/contact">+020 0155678679</Link>
              </div>
            </div>
          </div>
          <div className="container flex space">
            <div className="box flex space">
              <div className="icons">
                <i className="far fa-envelope"></i>
              </div>
              <div className="text">
                <h4>Mail Us</h4>
                <Link to="/contact">tareq@email.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
