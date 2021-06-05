import React, { useState } from 'react'
import { Collapse, Nav, Navbar } from 'react-bootstrap'
import CollapseButton from '../Buttons/CollapseButton'
import logo from '../../images/logo.png'
import './Footer.css'

const Footer = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="footer w-100">  
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <div className="copyRight">
                        {/* later: right sth */}
                    </div>
                </div>
            </Collapse>
            <Navbar className="wrap position-relative">
                <Nav>
                    <Nav.Link href="#team">Our Team</Nav.Link>
                    <Nav.Link href="#about">About Us</Nav.Link>
                    <Nav.Link href="#contact">Contact Us</Nav.Link>
                </Nav>
                
                <div 
                    className="position-absolute collapseBtn rounded-circle" 
                    onClick={(() => {setOpen(!open)})} 
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    <CollapseButton />
                </div>

                <Navbar.Brand href="#home" className="ml-auto">
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
    )
}

export default Footer
