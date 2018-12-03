import React, { Component } from 'react';

import { Chat, addResponseMessage,addUserMessage } from 'react-chat-popup';

import { getChatResponse } from '../../api/ChatResponse';
import { ListGroupItem } from 'react-bootstrap';

let i=0;
const Symptoms = ['fever',
'itching',
'skin_rash','nodal_skin_eruptions',
'continuous_sneezing',
'shivering',
'chills',
'joint_pain',
'stomach_pain',
'acidity',
'ulcers_on_tongue',
'muscle_wasting',
'vomiting',
'burning_micturition',
'spotting_urination',
'fatigue',
'weight_gain',
'anxiety',
'extra_marital_contacts',
'cold_hands_and_feets',
'mood_swings',
'weight_loss',
'restlessness',
'lethargy',
'patches_in_throat',
'irregular_sugar_level',
'cough',
'high_fever',
'sunken_eyes',
'breathlessness',
'sweating',
'dehydration',
'indigestion',
'headache',
'yellowish_skin',
'dark_urine',
'nausea',
'loss_of_appetite',
'pain_behind_the_eyes',
'back_pain',
'constipation',
'abdominal_pain',
'diarrhoea',
'mild_fever',
'yellow_urine',
'yellowing_of_eyes',
'acute_liver_failure','fluid_overload','swelling_of_stomach',

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

    addResponseMessage("Welcome to this illness prediction system!");
    addResponseMessage("Lets get started,what is your name?");
  }
  sendSymptomsToBackEnd() {
    let backendInput=this.state.userSymptoms;
   
    
    alert("your symptom will go to our system:"+backendInput);

   

    //start from here


      getChatResponse(backendInput)
      .then(data => {
          alert(data);
           //this.props.foundResult();
      
      })
      .catch((err) => {
        console.log(err);
        addResponseMessage("Sorry! I didnt get this option!");
      })
      
    console.log("current symptoms", backendInput);
    
  }

  handleNewUserMessage(newMessage) {
    i++;
    if (this.state.value === '') {

      var parentNode = document.getElementById("chat").parentElement;

      //create button dynamically.
      var button = document.createElement("button");
      button.innerHTML = "No more symptom";
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
    addResponseMessage("let us know name of the any  symptom you are experiencing ")
    }
    else if(i%2===1)
    {
     
      addResponseMessage("do you have any other symptom?")
    }
    else
    {
      currenSumptoms.push(newMessage) ;
      addResponseMessage("from how many days how you are experiencing this?")
    }
    this.setState({ userSymptoms: currenSumptoms});
    this.setState({ value: ''});
    
  }

  handleOnClickfromSuggestion(text)
  {
    addUserMessage(text);
    this.setState({ value: text },() => {
      this.handleNewUserMessage(text)});
    
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
          title={"Illness Predictior"}
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