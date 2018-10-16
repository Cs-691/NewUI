import React, { Component } from 'react';
import './App.css';


import {BrowserRouter as Router, Route } from 'react-router-dom';


import HomePage from './Containers/Pages/HomePage';
import ProfilePage from './Containers/Pages/ProfilePage';
import ChatWindow from './Containers/Pages/ChatWindow';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
       
      <div className="App">
      
        <Route exact path='/' component={HomePage} />
        <Route exact path='/profile' component={ProfilePage} />
        <Route exact path='/chat' component={ChatWindow} />
      
    

   
 </div>

 </Router>
                    
    </div>
    );
  }
}

export default App;
