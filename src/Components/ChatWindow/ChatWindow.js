import React, { Component } from 'react';

import { Chat,addResponseMessage,addUserMessage } from 'react-chat-popup';
import { PageHeader, Grid, Row,Col ,Image,Panel,Button} from 'react-bootstrap';

import {getChatResponse} from '../../api/ChatResponse';





const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'I am sick',
    year: 1972
  },
  {
    name: 'I am ill',
    year: 1972
  },
  {
    name: 'C+',
    year: 1972
  },
  {
    name: 'yes',
    year: 1972
  },
  {
    name: 'Elm',
    year: 2012
  },
  
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};





class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      value: '',
      suggestions: [],
      fullScreenModeActive: false

    }
    this.handleNewUserMessage = this.handleNewUserMessage.bind(this);
    this.enableFullScreen = this.enableFullScreen.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    
    
  }

  onSuggestionsFetchRequested  ( value )  {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };
  enableFullScreen()
  {
      alert("here")
      this.setState({ fullScreenModeActive: true });
  }
 
  componentDidMount() {
   
    addResponseMessage("Welcome to this illness prediction system!");
    addResponseMessage("Lets get started,what is your name?");
  }

  handleNewUserMessage(newMessage)
  {
    if(this.state.value===''){
      console.log("listen got attached")
      document.getElementById("chat").addEventListener("input", 
      e => {
        console.log(e.target.value)
        this.setState({ value: e.target.value });
        this.onSuggestionsFetchRequested( e.target.value);
       // newText.value = e.target.value
       //document.getElementById('autoComplete').select();
      // document.getElementById('chat').focus();


      })
   
  }
    getChatResponse(newMessage)
    .then(data => {
        addResponseMessage(data);
    
    })
    .catch((err) => {
      console.log(err);
      addResponseMessage("Sorry! I didnt get this option!");
    })
  }


  render() {
    
    const { value, suggestions } = this.state;

    var namesList = suggestions.map(function(name){
      return <li>{name.name}</li>;
    })

    console.log("state",this.state.fullScreenModeActive)

    return (

      <div>
      
        <Chat handleNewUserMessage={this.handleNewUserMessage}
        showCloseButton	={true}
     title={"illness predictior"}	
     senderPlaceHolder={"type a message"}
   // fullScreenMode={this.state.fullScreenModeActive}

        />
      {namesList}
      </div>
    )
  }
}
export default ChatWindow;