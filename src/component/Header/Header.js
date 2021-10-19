import React from 'react';
import Icon from './cropped-favicon.png';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import UseFirebase from '../../Hooks/UseFirebase';

const Header = () => {
const {user, logout} = UseFirebase();
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <h6 style={{color: 'white'}}>Hospital</h6>
  <Navbar.Brand href="#home"><img width="35px" hight="35px" src={Icon} alt="icon"/></Navbar.Brand>
 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={NavLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/Service#Service">Service</Nav.Link>
      <Nav.Link as={NavLink} to="/blog#blog">Blog</Nav.Link>
      <Nav.Link as={NavLink} to="/support#support">Support</Nav.Link>
      <Nav.Link as={NavLink} to="/appointment#appointment">Appointment</Nav.Link>
     
      { user.displayName?
               <button onClick={logout} style={{color: 'white'}}>Log Out</button>
               : 
               <Nav.Link as={NavLink} style={{color: 'white'}} to="/login">Login</Nav.Link>
               }
    </Nav>
    <Nav>
  
       <Navbar.Text>
        Signed in as:{user.displayName} 
        <br/>
        <img style={{borderRadius: '50px', width: '35px'}} src={user.photoURL} alt="user"/>
      </Navbar.Text>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;