import React, { Component } from 'react';
import './App.css';


import {BrowserRouter as Router, Route } from 'react-router-dom';


import HomePage from './Containers/Pages/HomePage';
import ProfilePage from './Containers/Pages/ProfilePage';
import DiagnosisPage from './Containers/Pages/DiagnosisPage';
import AboutPage from './Containers/Pages/AboutPage';
import ContactPage from './Containers/Pages/ContactPage.js';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
       
      <div className="App">
      
        <Route exact path='/' component={HomePage} />
        <Route exact path='/profile' component={ProfilePage} />
        <Route exact path='/chat' component={DiagnosisPage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/contact' component={ContactPage} />
      
    

   
 </div>

 </Router>
                    
    </div>
    );
  }
}

export default App;
