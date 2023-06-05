import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import styles from './Header.module.css';

import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate(null)
  const isLogin = JSON.parse(localStorage.getItem('login')) || false;

  const loginDetails = JSON.parse(localStorage.getItem('loginDetails')) || [];

function handleLogout(){
  console.log("logout")
  localStorage.setItem('login',JSON.stringify(false))
  navigate('/login')
}

  return (

    <div>
      <Navbar fixed="top" bg="dark" variant={"dark"} expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to={"/"}>GYM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="HOME" id="basic-nav-dropdown">
                <NavDropdown.Item href="#pricing">PRICING</NavDropdown.Item>
                <NavDropdown.Item href="#training">TRAINING</NavDropdown.Item>
                <NavDropdown.Item href="#trainer">TRAINER</NavDropdown.Item>
                <NavDropdown.Item href="#blogs">BLOGS</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/aboutus">ABOUT US </Nav.Link>
              <Nav.Link as={NavLink} to="/classes" >CLASSES</Nav.Link>
              <Nav.Link as={NavLink} to="/blogs">BLOGS</Nav.Link>
              <Nav.Link as={NavLink} to="/pricing">PRICING</Nav.Link>
            </Nav>
            <div className={styles.sub}>
            
              {
               isLogin ?  (
                <>
                {
                  loginDetails.isSubscribed ? (
                    <>
                     <Button  style={{margin:'0'}} variant='danger'>Subscribed</Button>
                    </>
                  ) : (
                    <>
                     <Button onClick={() => navigate('/pricing')} style={{margin:'0'}} variant='danger'>SubscribeNow</Button>
                    </>
                  )
                }
                </>
               )
               : <Button onClick={() => navigate('/login')} style={{margin:'0'}} variant='danger'>JOIN US</Button>
              }
      
             {
               isLogin && <Button style={{margin:'0'}} onClick={handleLogout} variant='danger'>Logout</Button> 
             } 
        
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header;

