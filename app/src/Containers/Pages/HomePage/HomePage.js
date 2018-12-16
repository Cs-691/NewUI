
import React, { Component } from 'react';
import { Modal, PageHeader, Carousel, Grid, Row, Col, FormControl, Button, Nav, NavItem } from 'react-bootstrap';


import NavigationBar from '../../../Components/NavigationBar';
import { getRemediesAPI } from '../../../api/ChatResponse.js';


import home1 from '../../../Assets/images/home1.jpeg'
import home2 from '../../../Assets/images/home2.jpg'
import home3 from '../../../Assets/images/home3.jpg'
import home4 from '../../../Assets/images/home4.jpg'
import home5 from '../../../Assets/images/home5.jpg'


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {


      illness: '', showModal: false, remedy: ''

    }

    this.handleChange = this.handleChange.bind(this);
    this.getRemedies = this.getRemedies.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }
  handleChange(e) {
    this.setState({ illness: e.target.value });
  }

  getRemedies(illness) {
    //alert(illness);
    this.setState({ illness: illness });
    getRemediesAPI(illness)
      .then(data => {
        console.log(data);
        this.setState({ remedy: data });
        this.openModal();

      })
      .catch((err) => {
        console.log(err);
        alert("sevrer has some problem!we are looking into it")
      })
  }

  openModal() {
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

        <NavigationBar />
        <PageHeader>
          ILLNESS DIAGNOSIS SYSTEM
</PageHeader>




        <Carousel>
          <Carousel.Item>
            <img height={500} alt="900x500" src={home1} responsive />
            <Carousel.Caption>
              <h3>A CLEVER Person Solves a Problem. A WISE Person Avoids It!.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img height={500} alt="900x500" src={home3} responsive />
          </Carousel.Item>
          <Carousel.Item>
            <img height={500} alt="900x500" src={home2} responsive />
            <Carousel.Caption>
              <h3>When the heart is at ease, the body is healthy.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img height={500} alt="900x500" src={home4} responsive />
          </Carousel.Item>
          <Carousel.Item>
            <img height={500} alt="900x500" src={home5} responsive />
            <Carousel.Caption>
              <h3 style={{ color: 'grey' }}>The foundation of success in life is good health.
               A person cannot accumulate a fortune very well when he is sick.
                     </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


        <Grid>
          <Row>


            <PageHeader>
              <small>Get Remedies in 1 Click</small>
            </PageHeader>
            <form>
              <Col lg={10}>
                <FormControl
                  type="text"
                  value={this.state.illness}
                  placeholder="Type Illness here"
                  onChange={this.handleChange}
                  style={{
                    width: '750px',
                    marginLeft: '40px',
                    marginTop: '1.5em'
                  }}
                />
                <FormControl.Feedback />
              </Col>
              <Col lg={1}>
                <Button
                  onClick={() => this.getRemedies(this.state.illness)}
                  bsStyle="info" style={{
                    width: '120px',
                    marginTop: '1.5em'
                  }}>Ask me</Button>
              </Col>
            </form>
          </Row>
          <Row>
            <Col lg={10}>
              <div
                style={{
                  marginTop: '2em',
                  marginLeft: '50px'
                }}>
                <Button onClick={() => this.getRemedies('Diabetes')}
                  bsSize="large" style={{ marginRight: '1em' }} >Diabetes</Button>
                <Button onClick={() => this.getRemedies('Migraine')}
                  bsSize="large" style={{ marginRight: '1em' }} >Migraine</Button>
                <Button onClick={() => this.getRemedies('chicken pox')}
                  bsSize="large" style={{ marginRight: '1em' }} >Chicken Pox</Button>
                <Button bsSize="large" onClick={() => this.getRemedies('common cold')}
                  style={{ marginRight: '1em' }} >Common Cold</Button>
              </div>
            </Col>
            <Col lg={10}>
              <div
                style={{
                  marginTop: '1.5em',
                  marginLeft: '50px'
                }}>
                <Button bsSize="large" onClick={() => this.getRemedies('Dehydration')}
                  style={{ marginRight: '1em' }} >Dehydration</Button>
                <Button bsSize="large" onClick={() => this.getRemedies('Food Poisoning')}
                  style={{ marginRight: '1em' }} >Food Poisoning</Button>
                <Button bsSize="large" onClick={() => this.getRemedies('Vitamin Deficiency')}
                  style={{ marginRight: '1em' }} >Vitamin Deficiency</Button>
                <Button bsSize="large" onClick={() => this.getRemedies('Flu')}
                  style={{ marginRight: '1em' }} >Flu</Button>
              </div>
            </Col>
          </Row>
        </Grid>

        <div
          style={{
            backgroundColor: '#f8f8f8',
            marginTop: '1.5em',
          }}>


          <Grid style={{ padding: '5em 0em' }}>


            <Row>
              <Col md="2">
                <h5 >About</h5>
                <Nav bsStyle="pills" stacked  >
                  <NavItem eventKey={1} href="/contact">
                    Site Map
    </NavItem>
                  <NavItem eventKey={2} href="/faq">
                    Contact Us
    </NavItem>
                  <NavItem eventKey={3} href="/faq">
                    How To Register
    </NavItem>
                </Nav>
              </Col>


              <Col md="2">
                <h5 >Diagnosis</h5>
                <Nav bsStyle="pills" stacked  >
                  <NavItem eventKey={1} href="/home">
                    Get Started
    </NavItem>
                  <NavItem eventKey={2} href="/faq">
                    FAQ
    </NavItem>
                  <NavItem eventKey={3} href="/faq">
                    How To Use
    </NavItem>
                </Nav>
              </Col>
            </Row>
          </Grid>

          <Modal show={this.state.showModal} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Show Remedies </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>

                Illness Selected: <b>{this.state.illness}</b>
                <br></br>
                Remedies : <b>
                  {this.state.remedy}

                </b>

              </div>


            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.closeModal}>Close</Button>
            </Modal.Footer>
          </Modal>




        </div>
      </div>
    )
  }
}
export default HomePage;