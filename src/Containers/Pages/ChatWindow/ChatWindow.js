import React, { Component } from 'react';

import { Chat,addResponseMessage,addUserMessage  } from 'react-chat-popup';

import {getChatResponse} from '../../../api/chatResponse';
import ReactAutocomplete from 'react-autocomplete';

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    value:''

    }
    this.handleNewUserMessage = this.handleNewUserMessage.bind(this);
    
  }
  componentDidMount() {
   
    addResponseMessage("Welcome to this illness prediction system!");
    addResponseMessage("Lets get started,what is your name?");
  }

  handleNewUserMessage(newMessage)
  {
    if(this.state.value===''){
      alert("hi")
      document.getElementById("chat").addEventListener("input", 
      e => {
        console.log(e.target.value)
        this.setState({ value: e.target.value });
       // newText.value = e.target.value
       document.getElementById('autoComplete').select();
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
    


    return (

      <div>
        
        <Chat handleNewUserMessage={this.handleNewUserMessage}
        showCloseButton	={true}
     title={"illness predictior"}	
     onChange={this.test}
   //  fullScreenMode={true}
        
        />
       
      </div>
    )
  }
}
export default ChatWindow;