import React, { Component } from 'react';
import NavigationBar from '../../../Components/NavigationBar';
import { PageHeader, Grid, Row,Col } from 'react-bootstrap';
import {HowToUse} from '../../../Components/HowToUse';

import ChatWindow from '../../../Components/ChatWindow'

import { Modal, Button } from 'react-bootstrap';


class DiagnosisPage extends Component {

    constructor(props) {
        super(props);
        if(sessionStorage.getItem('id')==undefined ||sessionStorage.getItem('id')==null )
        {
            alert("You must log in first")
            window.location.href = 'http://localhost:3000';

        }

        this.state = {

            resultFound:false,
            responseData:''
            
           
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
    foundResult(data)
    {
        this.setState({
            responseData: data
        });
        
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
                   
Illness Predicted: <b>{this.state.responseData.illness}</b>
<br></br>
Illness probability: <b>{this.state.responseData.probability}</b>
<br></br>
Remedies : <b>
{this.state.responseData.remedy}
    
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
