import React, { Component } from 'react';

import NavBarLoggedOut from '../../../Components/NavBarLoggedOut';

class AboutPage extends Component {

    constructor(props) {
        super(props);
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
                 <NavBarLoggedOut logout={this.logout}/> 
                 </div>
        )
    }
}
export default AboutPage;
    