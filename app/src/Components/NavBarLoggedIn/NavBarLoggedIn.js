import React, { Component } from 'react';
import {Nav, Navbar, NavItem,MenuItem} from 'react-bootstrap';

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
    <Nav>
      <NavItem eventKey={1} href="/">
        Home
      </NavItem>
      <NavItem eventKey={2} href="/about">
        About
      </NavItem>
      <NavItem eventKey={4} href="/contact">
        Contact
      </NavItem>
      <NavItem eventKey={5} href="/faq">
        Faq
      </NavItem>
      
    </Nav>
  
    <Nav pullRight>
    <MenuItem  onClick={this.OnLogin} eventKey={1}>Login</MenuItem>
    <MenuItem onClick={this.OnsignIn} eventKey={2}>Sign Up</MenuItem>
      
      
    </Nav>
  </Navbar>
          )
          }
      }
    export default NavBarLoggedIn;