import React, { Component } from 'react';
import {Nav, Navbar, NavDropdown, NavItem,MenuItem} from 'react-bootstrap';

class NavBarLoggedIn extends Component {
    constructor(props) {
      super(props);
      this.state = {
      
      
  
      }
      this.OnsignIn = this.OnsignIn.bind(this);
      this.OnLogin = this.OnLogin.bind(this);
    }



  
    
OnLogin()
{
  this.props.login();
}

      OnsignIn()
      {
  this.props.signIn();
      }
  
  
      render() {
      
  
  
          return (
      
  
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Logo</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="/">
        Home
      </NavItem>
      <NavItem eventKey={2} href="/about">
        About
      </NavItem>
      <NavItem eventKey={3} href="/d">
        Diagnosis
      </NavItem>
      <NavItem eventKey={4} href="/contact">
        Contact
      </NavItem>
      
    </Nav>
  
    <Nav pullRight>
    <MenuItem  onClick={this.OnLogin} eventKey={1}>Login</MenuItem>
    <MenuItem onClick={this.OnsignIn} eventKey={2}>SignIn</MenuItem>
      
      
    </Nav>
  </Navbar>
          )
          }
      }
    export default NavBarLoggedIn;