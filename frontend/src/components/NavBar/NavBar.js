import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../assets/logo.svg";
import navIcon1 from "../../assets/linkedin-logo.svg";
import navIcon2 from "../../assets/github-logo.svg";
import navIcon3 from "../../assets/instagram-logo.svg";
import { Link } from "react-scroll";

import details from "../../config/details";

import "./NavBar.scss";

import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const socialLinks = details.socialLinks;
  const navLinks = details.navLinks;

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        {/* <Navbar.Brand href="#home">
                <img src={logo} alt="Logo"/>
            </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((link, index) => (
              <Link
                to={link.ref}
                key={index}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                {link.name}
              </Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href={socialLinks.linkedIn} target="_blank">
                <img id="linkedin-icon" src={navIcon1} alt="" />
              </a>
              <a href={socialLinks.github} target="_blank">
                <img id="github-icon" src={navIcon2} alt="" />
              </a>
              <a href={socialLinks.instagram} target="_blank">
                <img id="instagram-icon" src={navIcon3} alt="" />
              </a>
            </div>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button>
                <span>Let's connect</span>
              </button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
