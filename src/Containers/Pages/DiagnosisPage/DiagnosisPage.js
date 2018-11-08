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
          <Col lg={3}>
          <HowToUse/>
          </Col>    

            <Col lg={3}>       
        <ChatWindow/>
        </Col>
        </Row>
        </Grid>
        <span style={{marginTop:'200px', marginLeft:'1050px', fontSize:'1em'}}><b>Click here to Start</b>
            </span>
        </div>
        )
    }
}

export default DiagnosisPage;
