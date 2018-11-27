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
      
        <span style={{marginTop:'200px', marginLeft:'1050px', fontSize:'1em'}}><b>Click here to Start</b>
        </span>
      
        <Button style={{marginTop:'20px', marginRight:'950px'}} bsStyle="info" onClick={this.refresh}>Start Fresh</Button>
            
           

 <Row>
{this.state.resultFound && <Button bsStyle="info" onClick={this.openModal}>See results</Button>}
 <Modal show={this.state.showModal} onHide={this.closeModal}>
            <Modal.Header closeButton>
            <Modal.Title>Illness Prediction </Modal.Title>
          </Modal.Header>
          <Modal.Body>
                    <div>
                   
Illness Predicted: <b>cold!</b>

                    </div>
                   
                   
                        </Modal.Body>
                    <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
                </Modal>
                </Row>
 </Grid>
        </div>
        )
    }
}

export default DiagnosisPage;
