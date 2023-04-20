

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import {NavLink,useNavigate} from 'react-router-dom'
const Header = () => {
    const navLogin=useNavigate(null)
    function toLogin(){
     navLogin("/login")
    }
     //"#pricing"
     //"training"
     //"trainer"
     // "blogs"


  return (
  
    <div>
    <Navbar  fixed="top" bg="dark" variant={"dark"} expand="lg">
       <Container>
         <Navbar.Brand  as={NavLink} to={"/"}>GYM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             {/* <Nav.Link  as={NavLink} to="/"> HOME</Nav.Link> */}
             <NavDropdown title="HOME" id="basic-nav-dropdown">
              <NavDropdown.Item  href="#pricing">PRICING</NavDropdown.Item>
              <NavDropdown.Item  href="#training">TRAINING</NavDropdown.Item>
              <NavDropdown.Item  href="#trainer">TRAINER</NavDropdown.Item>
              <NavDropdown.Item  href="#blogs">BLOGS</NavDropdown.Item>
            </NavDropdown>
             <Nav.Link  as={NavLink} to="/aboutus">ABOUT US </Nav.Link>
             <Nav.Link  as={NavLink} to="/classes" >CLASSES</Nav.Link>
             <Nav.Link  as={NavLink} to="/blogs">BLOGS</Nav.Link>
           </Nav>
         <Button onClick={toLogin} variant="danger">JOIN US</Button>
       </Navbar.Collapse>
     </Container>
   </Navbar>
  
   </div>
  )
}

export default Header

