import React, { Component } from 'react';
import { Glyphicon, Button } from 'react-bootstrap';

import NavigationBar from '../../../Components/NavigationBar';
import { PageHeader, Grid, Row } from 'react-bootstrap';
import { sendMessage} from '../../../api/UserOpreations';



class ContactPage extends Component {

    constructor(props) {
        super(props);
        this.state = {name:'',email:'',subject:'',message:'',company:''}
        this.sendEmail = this.sendEmail.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    logout() {
        this.setState({ email: '' });
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('name');
        alert("Logged out!")
    }
    sendEmail() {
        console.log(this.state);

var sub=this.state.subject
var company=this.state.company
var message=this.state.message
var from="From: "+this.state.name+"\n"+this.state.email+"\n"+company;
var meesage1 = "Subject:"+sub+"\nMessage:"+message+"\n"+from;
   
    ;
   // window.location.href = link;

   sendMessage(JSON.stringify(meesage1))
            .then(data => {

               alert(data);
            })
            .catch((err) => {
                console.log(err);
                alert("Soemthing went wrong!")
            })


    }
    handleChange(event) {
        const target = event.target;
        const value =target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {
        return (

            <div>
                <NavigationBar />
                <PageHeader>Contact us</PageHeader>

                <Grid>


                    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    matter of hours to help you.</p>

                    <Row>


                        <div className="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" method="POST">


                                <Row>


                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input value={this.state.name} 
                                             onChange={this.handleChange}
                                            placeholder="john" type="text" 
                                            id="name" name="name" className="form-control" />
                                            <label htmlFor="name" className="">Your name</label>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input  value={this.state.email}
                                             onChange={this.handleChange}
                                            type="email" placeholder="xyz@gmail.com" 
                                            id="email" name="email" className="form-control" />
                                            <label htmlFor='email' className="">Your email</label>
                                        </div>
                                    </div>

                                </Row>

                                <Row>
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input value={this.state.subject}
                                             onChange={this.handleChange}
                                             type="text"placeholder="query" id="subject" name="subject"
                                              className="form-control" />
                                            <label htmlFor="subject" className="">Subject</label>
                                        </div>
                                    </div>

                                     <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input value={this.state.company} 
                                             onChange={this.handleChange}
                                            type="text"placeholder="Apple" id="company"
                                             name="company" className="form-control" />
                                            <label htmlFor="company" className="">Company</label>
                                        </div>
                                    </div>
                                </Row>

                                <Row>


                                    <div className="col-md-12">

                                        <div className="md-form">
                                            <textarea value={this.state.message} 
                                             onChange={this.handleChange}
                                            type="text" placeholder="Hi , I would like to" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                            <label htmlFor="message">Your message</label>
                                        </div>

                                    </div>
                                </Row>


                            </form>

                            <div className="text-center text-md-left">
                                <Button className="btn btn-primary" onClick={this.sendEmail}>Send</Button>
                            </div>
                            <div className="status"></div>
                        </div>

                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0">
                                <li> <Button>
                                    <Glyphicon glyph="map-marker" />
                                </Button>
                                    <p>Manhatten, NY ,10013 USA</p>
                                </li>

                                <li>
                                    <Button>
                                        <Glyphicon glyph="earphone" />
                                    </Button>
                                    <p>+ 01 234 567 89</p>
                                </li>

                                <li>
                                    <Button>
                                        <Glyphicon glyph="envelope" />
                                    </Button><br></br>
                                    <a 
                                    style={{
                                        color: 'black',
                                       
                                      }}
                                    href="mailto:ids@gmail.com" targ="blank">IDS@gmail.com</a>

                                </li>
                            </ul>
                        </div>


                   </Row>

                </Grid>
            </div>
        )
    }
}

export default ContactPage;
