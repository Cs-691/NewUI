import React, { Component } from 'react';


import NavigationBar from '../../../Components/NavigationBar';

import { PageHeader, Grid, Row,Col ,Image,Panel} from 'react-bootstrap';

import about1 from '../../../Assets/images/about1.jpg'
import about2 from '../../../Assets/images/about2.jpeg'
import about3 from '../../../Assets/images/about3.jpg'



class AboutPage extends Component {

    constructor(props) {
        super(props);
    }
   
    
    render() {
        return (

            <div>
                <NavigationBar/>
                <PageHeader>
          About Us
</PageHeader>

 <Grid>
          <Row>
              <Col lg={5}>
              
              
              <p style={{textAlign:'justify', marginTop:'50px', marginLeft:'10px', fontSize:'1.8em'}}>
              <span> We are combining the ever-growing 
                computing power of machines with  the best medical expertise of humans to create a
                comprehensive, immediate and personalized health  service and
                making it universally available.</span></p>
            
              </Col>
            <Col lg={7}>
              <Image src={about1} responsive style={{width:'100%', height:'350px'}}/>
            </Col>
          </Row>

           <Row>
        <Col>
          <Panel  textAlign='center' style={{marginTop:'10px'}}>
          <Panel.Body>
          <p style={{fontSize:'1.8em'}}>We understand your symptoms and direct you to the best 
          and most appropriate solution</p>
          </Panel.Body>
          </Panel >
        </Col>
        </Row>
        <Row>
        <Col lg={7}>
              <Image src={about2} responsive style={{width:'100%', height:'350px'}}/>
            </Col>

            <Col lg={5}>
              
              
              <p style={{textAlign:'justify', marginTop:'50px', marginLeft:'10px', fontSize:'1.8em'}}><span>
                  
              Our AI system is being created by 
              experienced scientists using real datasets and by using the latest advances in deep learning.
                  </span></p>
            
              </Col>
        </Row>

        <Row>
              <Col lg={5}>
              
              
              <p style={{textAlign:'justify', marginTop:'50px', marginLeft:'10px', fontSize:'1.8em'}}>
              <span>
              We track your medical history, and medical conditions to understand you better. 
              Unless you’ve had the same doctor since you were born and he/she magically remembers 
              your entire medical history, AI Doc is your best bet at a personalized medical advice.
                  
                  </span></p>
            
              </Col>
            <Col lg={7}>
              <Image src={about3} responsive style={{width:'100%', height:'350px'}}/>
            </Col>
          </Row>

 <Row>
        <Col>
          <Panel  textAlign='center' style={{marginTop:'10px'}}>
          <Panel.Body>
          <p style={{fontSize:'1.8em'}}>
          We assess known symptoms and risk factors to provide informed, up-to-date medical information.
          
          </p>
          </Panel.Body>
          </Panel >
        </Col>
        </Row>




          </Grid>

                 </div>
        )
    }
}
export default AboutPage;
    