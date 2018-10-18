import React, { Component } from 'react';

import { Chat,addResponseMessage,addUserMessage,o } from 'react-chat-popup';

import {getChatResponse} from '../../../api/chatResponse';





const languages = [
  {
    name: 'C',
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
      suggestions: []

    }
    this.handleNewUserMessage = this.handleNewUserMessage.bind(this);

    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    
    
  }

  onSuggestionsFetchRequested  ( value )  {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

 
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



    return (

      <div>
        
        <Chat handleNewUserMessage={this.handleNewUserMessage}
        showCloseButton	={true}
     title={"illness predictior"}	
   //  fullScreenMode={true}
        
        />
      {namesList}
      </div>
    )
  }
}
export default ChatWindow;