import React, { Component } from 'react';
import {Nav, Navbar, NavItem,MenuItem} from 'react-bootstrap';

class NavBarLoggedOut extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
      this.OnLogout = this.OnLogout.bind(this);
      
    }



    OnLogout()
    {
this.props.logout();
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
    <NavItem eventKey={3} href="/chat">
      Diagnosis
    </NavItem>
    <NavItem eventKey={4} href="/contact">
      Contact
    </NavItem>
    <NavItem eventKey={5} href="/faq">
        Faq
      </NavItem>
    
  </Nav>

  <Nav pullRight>
  <MenuItem onSelect={this.OnLogout}  href='/' eventKey={1}>Logout</MenuItem>
  <MenuItem href="/profile" eventKey={2}>Profile</MenuItem>
    
    
  </Nav>
</Navbar>
        )
        }
    }
    export default NavBarLoggedOut;