import React, { Component } from 'react';
import {Nav, Navbar, NavItem,MenuItem} from 'react-bootstrap';
import { PropTypes } from 'react';
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
  <MenuItem onClick={this.OnLogout}  href='/' eventKey={1}>Logout</MenuItem>
  <MenuItem href="/profile" eventKey={2}>Profile</MenuItem>
    
    
  </Nav>
</Navbar>
        )
        }
    }
    export default NavBarLoggedOut;