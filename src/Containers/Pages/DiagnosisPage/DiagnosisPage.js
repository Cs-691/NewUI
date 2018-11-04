import React, { Component } from 'react';
import NavigationBar from '../../../Components/NavigationBar';


import ChatWindow from '../../../Components/ChatWindow'

class DiagnosisPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
           
            <div>
                    <NavigationBar/>

        <ChatWindow/>
        </div>
        )
    }
}

export default DiagnosisPage;
