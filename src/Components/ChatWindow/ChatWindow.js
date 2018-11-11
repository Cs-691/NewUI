import React, { Component } from 'react';

import { Chat,addResponseMessage,addUserMessage } from 'react-chat-popup';

import {getChatResponse} from '../../api/ChatResponse';
import {  ListGroupItem } from 'react-bootstrap';


const Symptoms=['fever',
  'cough',
  'sore throat',
  'runny nose',
  'stuffy nose',
  'muscle ache',
  'body ache',
  'headache',
  'fatigue',
  'vomiting',
  'nausea',
  'diarrhea',
  'congestion'
  ]




// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : Symptoms.filter(lang =>
    lang.toLowerCase().slice(0, inputLength) === inputValue
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

    var suggestionsList = suggestions.map(function(name){
      return <ListGroupItem>{name}</ListGroupItem>;
    })

    var IntialsuggestionsList = Symptoms.slice(0,10).map(function(name){
      return <ListGroupItem >{name}</ListGroupItem>;
    })


    console.log("state",this.state.fullScreenModeActive)

    return (

      <div>
      
      
      
        <Chat handleNewUserMessage={this.handleNewUserMessage}
        showCloseButton	={true}
     title={"Illness Predictior"}	
     senderPlaceHolder={"Type a message...."}
   // fullScreenMode={this.state.fullScreenModeActive}

        />

        <div style={{width:'250px',marginLeft: '50px'}}>
          <span><b>Symptom Suggestions</b></span>
         
      { suggestionsList.length>0 && suggestionsList}
      { suggestionsList.length===0 && IntialsuggestionsList}
     
      </div>
      </div>
    )
  }
}
export default ChatWindow;