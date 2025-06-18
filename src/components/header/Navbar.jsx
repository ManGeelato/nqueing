import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoLocation, IoChevronDown } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import logo from '../../assets/images/nqLogo.png'

function Navbar() {
  const navigate = useNavigate();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [animatedLinks, setAnimatedLinks] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: "/", name: "Home" },
    { path: "/contact", name: "Contact" },
  ];

  // Services dropdown menu items
  const servicesMenu = (
    <Menu>
      <Menu.Item key="3">
        <Link to="/cross-border-permits" onClick={() => setIsMenuActive(false)}>
         Cross Border Permits
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/import-export-services" onClick={() => setIsMenuActive(false)}>
          Imports and Exports
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/vehicle-registrations" onClick={() => setIsMenuActive(false)}>
         Vehicle Registration & Plates
        </Link>
      </Menu.Item>
    </Menu>
  );

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    setAnimatedLinks(!animatedLinks);
  };

  useEffect(() => {
    if (!isMenuActive) {
      setAnimatedLinks(false);
    }
  }, [isMenuActive]);

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <div id="navigation-bar">
      <div id="nav-top">
        <div id="nav-top-card">
          <small>
            <MdEmail /> nqueueingservices.co.za
          </small>
        </div>
        <div className="nav-top-cardlocation">
          <small id="top-nav-add">
            <IoLocation />
            4 Rysdal Place Ormonde Extension 1 Johannesburg South 2091
          </small>
        </div>
        <div id="nav-top-card">
          <small id="top-nav-addt">
            <FaSquarePhone />+ +27 78 534 6180
          </small>
        </div>
      </div>
      
      <nav className="navbar">
        <div className="mitral-logo" onClick={() => navigate("/")}>
          <img
            src={logo}
            alt="Nqueueing Logo"
            style={{
              width: "100px",
              height: "auto",
              objectFit: "contain"
            }}
          />
        </div>

        <ul className={`nav-links ${isMenuActive ? "active" : ""}`}>
          <li
            style={
              animatedLinks
                ? {
                    animation: `navLinkFade 0.5s ease forwards ${0 / 7 + 0.3}s`,
                  }
                : {}
            }
          >
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
              onClick={() => {
                setIsMenuActive(false);
                setAnimatedLinks(false);
              }}
            >
              Home
            </Link>
          </li>
          
          {/* Services dropdown - Desktop */}
          <li className="services-dropdown desktop-only"
              style={
                animatedLinks
                  ? {
                      animation: `navLinkFade 0.5s ease forwards ${1 / 7 + 0.3}s`,
                    }
                  : {}
              }>
            <Dropdown 
              overlay={servicesMenu} 
              trigger={['hover', 'click']}
              placement="bottomLeft"
            >
              <span className={`dropdown-trigger ${isServicesActive ? "active" : ""}`}>
                Services <IoChevronDown />
              </span>
            </Dropdown>
          </li>

          {/* Services dropdown - Mobile */}
          <li className="services-mobile mobile-only"
              style={
                animatedLinks
                  ? {
                      animation: `navLinkFade 0.5s ease forwards ${1 / 7 + 0.3}s`,
                    }
                  : {}
              }>
            <Dropdown 
              overlay={servicesMenu} 
              trigger={['click']}
              placement="bottomLeft"
            >
              <span className={`dropdown-trigger ${isServicesActive ? "active" : ""}`}>
                Services <IoChevronDown />
              </span>
            </Dropdown>
          </li>

          <li
            style={
              animatedLinks
                ? {
                    animation: `navLinkFade 0.5s ease forwards ${2 / 7 + 0.3}s`,
                  }
                : {}
            }
          >
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
              onClick={() => {
                setIsMenuActive(false);
                setAnimatedLinks(false);
              }}
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          className="chat-btn"
          onClick={() => navigate("/contact")}
        >
          Book Appointment
        </button>

        <button
          className={`hamburger ${isMenuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;