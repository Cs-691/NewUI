import React, { Component } from 'react';


import NavigationBar from '../../../Components/NavigationBar';
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
                <NavigationBar/>
                 </div>
        )
    }
}
export default AboutPage;
    