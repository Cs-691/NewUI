import React, { Component } from 'react';

import { Chat,addResponseMessage,addUserMessage  } from 'react-chat-popup';
import {getChatResponse} from '../../../api/chatResponse';

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    

    }
    this.handleNewUserMessage = this.handleNewUserMessage.bind(this);
  }
  componentDidMount() {
    addResponseMessage("Welcome to this illness prediction system!");
  }

  handleNewUserMessage(newMessage)
  {
    
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
        
        />
      </div>
    )
  }
}
export default ChatWindow;