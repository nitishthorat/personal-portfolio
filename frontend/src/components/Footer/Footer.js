import React from "react";
import { Col, Row } from "react-bootstrap";

import navIcon1 from "../../assets/linkedin-logo.svg";
import navIcon2 from "../../assets/github-logo.svg";
import navIcon3 from "../../assets/instagram-logo.svg";

import details from "../../config/details";

import "./Footer.scss";

const Footer = () => {
  const socialLinks = details.socialLinks;

  return (
    <footer className="footer">
      <Row className="align-items-center">
        <Col sm={6} className="text-center text-sm-start">
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
        </Col>
        <Col sm={6} className="text-center text-sm-end">
          <p>Copyright 2024. All Rights Reserved</p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
