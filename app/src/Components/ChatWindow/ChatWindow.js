import React, { Component } from 'react';

import { Chat, addResponseMessage,addUserMessage } from 'react-chat-popup';

import { getChatResponse } from '../../api/ChatResponse';
import { ListGroupItem } from 'react-bootstrap';

import {sym} from './symptomConstant'
let i=0;
const Symptoms = sym;




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
      fullScreenModeActive: false,
      userSymptoms: [],

    }
    this.handleNewUserMessage = this.handleNewUserMessage.bind(this);
    this.enableFullScreen = this.enableFullScreen.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.sendSymptomsToBackEnd = this.sendSymptomsToBackEnd.bind(this);
    this.handleOnClickfromSuggestion = this.handleOnClickfromSuggestion.bind(this);
   
  }

  onSuggestionsFetchRequested(value) {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };
  enableFullScreen() {
    alert("here")
    this.setState({ fullScreenModeActive: true });
  }

  componentDidMount() {

    addResponseMessage("Welcome to our Illness Prediction System!");
    addResponseMessage("Let's get started, what is your name?");
  }
  sendSymptomsToBackEnd() {
    let backendInput=this.state.userSymptoms;
   
    
    //alert("your symptoms will go to our system:"+backendInput);

   

    //start from here


      getChatResponse(backendInput)
      .then(data => {
        console.log(data);
        alert("Processing done! Click on 'see results' button!")
           this.props.foundResult(data);
      
      })
      .catch((err) => {
        console.log(err);
        addResponseMessage("Sorry! There is some problem, please check logs");
      })
      
    console.log("current symptoms", backendInput);
    
  }

  handleNewUserMessage(newMessage) 
  {
    newMessage=newMessage.toLowerCase()
    newMessage=newMessage.split("have").pop().trim();
    newMessage=newMessage .replace(/ /g,"_");
    //alert(newMessage)
    
    i++;
    if (document.getElementById('no-more-symptom') == null) {

      var parentNode = document.getElementById("chat").parentElement;

      //create button dynamically.
      var button = document.createElement("button");
      button.innerHTML = "No more symptoms";
      button.id = "no-more-symptom"
      button.style.cssText = 'background-color: rgb(163, 234, 247); border-radius: 5px;  text-align: left; height: auto;';
      parentNode.appendChild(button);


      //attach click event to send all symptoms to back-end
      document.getElementById("no-more-symptom").addEventListener("click",
        e => {
          this.sendSymptomsToBackEnd();
        })

      //attach event to show symptom suggestion
      document.getElementById("chat").addEventListener("input",
        e => {
          this.setState({ value: e.target.value });
          this.onSuggestionsFetchRequested(e.target.value);

        })

    }
  let currenSumptoms= this.state.userSymptoms;
 
   

    if(i==1){
    addResponseMessage("What symptoms are you experiencing?")
    }
    else if(i%2===1)
    {
     
      addResponseMessage("Are you experiencing any other symptom?")
    }
    else
    {
      newMessage=newMessage.trim().toLowerCase();
      currenSumptoms.push(newMessage) ;
      addResponseMessage("How many days have you been experiencing this?")
    }
    this.setState({ userSymptoms: currenSumptoms});
    this.setState({ value: ''});
    
    
  }

  handleOnClickfromSuggestion(text)
  {
    
    if (document.getElementById('chat') != null) {
    addUserMessage(text);
    this.setState({ value: text },() => {
      this.handleNewUserMessage(text)});
      

    }
    
  }

  render() {
   
    const { value, suggestions } = this.state;
    let handleOnClickfromSuggestion=this.handleOnClickfromSuggestion;
    var suggestionsList = suggestions.map(function (name) {
      return <ListGroupItem key={name} onClick={() => handleOnClickfromSuggestion(name)}>{name}</ListGroupItem>;
    })

    var IntialsuggestionsList = Symptoms.slice(0, 10).map(function (name) {
      return <ListGroupItem key={name} onClick={() => handleOnClickfromSuggestion(name)}>{name}</ListGroupItem>;
    })


   // console.log("state", this.state.fullScreenModeActive)

    return (

      <div>



        <Chat handleNewUserMessage={this.handleNewUserMessage}
          showCloseButton={true}
          title={"Illness Predictor"}
          senderPlaceHolder={"Type a message...."}
        // fullScreenMode={this.state.fullScreenModeActive}

        />

        <div style={{ width: '250px', marginLeft: '50px' }}>
          <span><b>Symptom Suggestions</b></span>

          {suggestionsList.length > 0 && suggestionsList}
          {suggestionsList.length === 0 && this.state.value === '' && IntialsuggestionsList}

        </div>
      </div>
    )
  }
}
export default ChatWindow;