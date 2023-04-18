

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import {Link,useNavigate} from 'react-router-dom'
const Header = () => {
    const navLogin=useNavigate(null)
    function toLogin(){
     navLogin("/login")
    }
  return (
  
    <div>
    <Navbar  fixed="top" bg="dark" variant={"dark"} expand="lg">
       <Container>
         <Navbar.Brand  as={Link} to={"/"}>GYM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             <Nav.Link  as={Link} to="/"> HOME</Nav.Link>
             <Nav.Link  as={Link} to="/aboutus">ABOUT US </Nav.Link>
             <Nav.Link  as={Link} to="/classes" >CLASSES</Nav.Link>
             <Nav.Link  as={Link} to="/blogs">BLOGS</Nav.Link>
           </Nav>
         <Button onClick={toLogin} variant="danger">JOIN US</Button>
       </Navbar.Collapse>
     </Container>
   </Navbar>
  
   </div>
  )
}

export default Header

