import React, { Component } from 'react';

import LoginModal from '../../../Containers/Layouts/LoginModal'
import SignUpModal from '../../../Containers/Layouts/SignUpModal'
import {Link} from 'react-router-dom';

import { validateUserAPI, signupAPI } from '../../../api/UserOpreations';

import {Nav, Navbar, NavDropdown, NavItem,MenuItem} from 'react-bootstrap';
import NavBarLoggedIn from '../../../Components/NavBarLoggedIn';
import NavBarLoggedOut from '../../../Components/NavBarLoggedOut';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      loginModal: false, 
      signUpModal:false,
    

    }
    var value=sessionStorage.getItem('id');
    if(value!=undefined){
    this.state.email=value;
    }
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.closeSignUpModal = this.closeSignUpModal.bind(this);

    this.openLoginModal = this.openLoginModal.bind(this);

    this.openSignUpModal = this.openSignUpModal.bind(this);

    this.loginUser = this.loginUser.bind(this);
    this.logout = this.logout.bind(this);

    this.addUser = this.addUser.bind(this);
  }

  loginUser(param)
  {
 
   
  
    validateUserAPI(JSON.stringify(param))
        .then(data => {
          this.closeLoginModal();
          console.log(data);
          this.setState({ email: param.email });
          sessionStorage.setItem('id',param.email);
        })
        .catch((err) => {
          console.log(err);
          alert("email id/ password is wrong!")
        })
  }

  addUser(param)
  {
    
    signupAPI(JSON.stringify(param))
    .then(data => {
      this.setState({ email: param.email });
      this.closeSignUpModal();
      console.log(data);
     //goto profile page

     sessionStorage.setItem('id',param.email);
    })
    .catch((err) => {
      console.log(err);
      alert("email id is already under used!")
    })
  }
    closeLoginModal()
    {
      this.setState({ loginModal: false });
    }
    closeSignUpModal()
    {
      this.setState({ signUpModal: false });
    }
    openLoginModal()
    {
      this.setState({ loginModal: true });
    }
    openSignUpModal()
    {
      this.setState({ signUpModal: true });
    }
    logout()
    {
      this.setState({ email: '' });
      sessionStorage.removeItem('id');
      alert("Logged out!")
    }


  render() {
    


    return (

      <div>
        
     { this.state.email !='' && this.state.email !=undefined &&
     <div>
     
     <NavBarLoggedOut logout={this.logout}/> 
       
     
   

</div>
     }

{ this.state.email ==''  &&
<div>

  
  <NavBarLoggedIn  signIn={this.openSignUpModal} login={this.openLoginModal}/>

</div>


}
      

        {this.state.loginModal === true && <LoginModal
         callback={this.loginUser} onClose={this.closeLoginModal} />}


            {this.state.signUpModal === true && <SignUpModal
           callback={this.addUser} onClose={this.closeSignUpModal} />}

      </div>
    )
  }
}
export default HomePage;