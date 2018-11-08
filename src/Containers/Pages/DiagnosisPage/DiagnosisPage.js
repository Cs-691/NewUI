import React, { Component } from 'react';
import NavigationBar from '../../../Components/NavigationBar';
import { PageHeader, Grid, Row,Col ,Image,Panel,Button} from 'react-bootstrap';
import {HowToUse} from '../../../Components/HowToUse';

import ChatWindow from '../../../Components/ChatWindow'

class DiagnosisPage extends Component {

    constructor(props) {
        super(props);
        this.state = {


           
          }
         

    }
    
    render() {
        return (
           
            <div>
                <NavigationBar/>
                <PageHeader>
                 Start Diagnosis</PageHeader>

 <Grid>
          <Row>
          <Col lg={5}>
          <HowToUse/>
          </Col>    

            <Col lg={5}>       
        <ChatWindow/>
        </Col>
        </Row>
        </Grid>
        </div>
        )
    }
}

export default DiagnosisPage;
