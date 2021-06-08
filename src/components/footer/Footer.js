import React, { useState } from "react";
import { Collapse, Nav, Navbar } from "react-bootstrap";
import CollapseButton from "../Buttons/CollapseButton";
import logo from "../../images/logo.png";
import "./Footer.css";

const Footer = ({ team, about, contact }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="footer w-100">
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="copyRight d-flex justify-content-center align-items-center">
            Developed By Sina Aghdasi © 2021
          </div>
        </div>
      </Collapse>
      <Navbar className="wrap position-relative px-5">
        <Nav>
          <Nav.Link
            href="#team"
            onClick={() => team(true)}
            style={{ color: "#352E7E" }}
          >
            Our Team
          </Nav.Link>
          <Nav.Link
            href="#about"
            onClick={() => about(true)}
            style={{ color: "#352E7E" }}
          >
            About Us
          </Nav.Link>
          <Nav.Link
            href="#contact"
            onClick={() => contact(true)}
            style={{ color: "#352E7E" }}
          >
            Contact Us
          </Nav.Link>
        </Nav>

        <div
          className="position-absolute collapseBtn rounded-circle"
          onClick={() => {
            setOpen(!open);
          }}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <CollapseButton />
        </div>

        <Navbar.Brand href="#home" className="ml-auto mr-0">
          <img
            src={logo}
            width="100"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Footer;
