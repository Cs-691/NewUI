import React, { Component } from 'react';
import NavigationBar from '../../../Components/NavigationBar';
import { PageHeader, Grid, Row,Col } from 'react-bootstrap';
import {HowToUse} from '../../../Components/HowToUse';

import ChatWindow from '../../../Components/ChatWindow'

import { Modal, Button } from 'react-bootstrap';


class DiagnosisPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

            resultFound:false
          }
          this.closeModal = this.closeModal.bind(this);
          this.openModal = this.openModal.bind(this);
          this.foundResult = this.foundResult.bind(this);
          this.refresh = this.refresh.bind(this);
    }

    refresh()
    {
        window.location.reload();
       // Location.reload(true);
    }
    foundResult()
    {
        
        this.setState({
            resultFound: true
        });
    }
    openModal()
    {
        this.setState({
            showModal: true
        });
    }
    closeModal() {
        this.setState({
            showModal: false
        });
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
        <ChatWindow foundResult={this.foundResult}/>
        </Col>
        </Row>
        </Grid>
        <span style={{marginTop:'200px', marginLeft:'1050px', fontSize:'1em'}}><b>Click here to Start</b>
        </span>
       
      <div >
        <Button  
        
        style={{ marginLeft:'100px'}}
        bsStyle="info" onClick={this.refresh}>Start Fresh</Button>
      {this.state.resultFound &&   <Button 
        style={{ marginLeft:'120px', marginRight:'850px'}}
      bsStyle="info" onClick={this.openModal}>See results</Button>   }
           </div>

 

 <Modal show={this.state.showModal} onHide={this.closeModal}>
            <Modal.Header closeButton>
            <Modal.Title>Illness Prediction </Modal.Title>
          </Modal.Header>
          <Modal.Body>
                    <div>
                   
Illness Predicted: <b>cold!</b>
<br></br>
Remedies : <b>

    <ul>

    <li>Gargling can moisten a sore throat and bring temporary relief. Gargle with half a teaspoon of salt dissolved in 8 oz warm water, four times daily.
    </li><li>Hot liquids relieve nasal congestion, prevent dehydration, and soothe the uncomfortably inflamed membranes that line your nose and throat. If you're so congested that you can't sleep at night, try a hot toddy, an age-old remedy.
    </li><li>Sleep with an extra pillow under your head. Elevating your head will help relieve congested nasal passages. 
    </li>
    </ul>
</b>

                    </div>
                   
                   
                        </Modal.Body>
                    <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
                </Modal>
               

        </div>
        )
    }
}

export default DiagnosisPage;
