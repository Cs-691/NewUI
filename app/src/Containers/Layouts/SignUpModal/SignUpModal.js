import React from "react";
import { Modal, Button } from 'react-bootstrap';

import "./signup.css";

//Modal.setAppElement('#root')
class SignUpModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = { fname: '', lname: '', email: '', gender: 'male', password: '', cpassword: '', 
        age: '',diabetes:'NO',smoke:'NO',bloodPressure:'NO' }
        // preserve the initial state in a new object
        this.baseState = this.state;

        this.handleChange = this.handleChange.bind(this);
        this.clearData = this.clearData.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


        this.handleValidation = this.handleValidation.bind(this);


    }

    componentWillUnmount() {
        this.clearData();
    }

    clearData() {
        this.setState(this.baseState)
    }

    afterOpenModal() {
        //console.log(this.props.modalDataFields);

    }

    handleSubmit() {
        let data = this.state;
        if(this.state.password !== this.state.cpassword)
        {
alert("password should match!")
        }
        else{
        this.props.callback(data);
        }
    }
    handleValidation() {
        //make sure all the properties are non empty
        const valid = (this.state.email !== '' && this.state.password !== '' &&
        
        this.state.age !== '' && this.state.fname !== '' && 

        this.state.lname !== '' && this.state.password !== ''
        );
        return valid;
    }


    closeModal() {
        this.props.onClose();
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {


        return (
            <div id="modalContainer">
                <Modal show="true" onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign Up </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


                        <div class="info-header">Enter the following Information</div>


                        <label>
                            First Name:
                <input  class=" center form-control form-input" type="text" name="fname" onChange={this.handleChange} value={this.state.fname} />
                        </label>

                        <label>
                            Last Name:
                <input class=" center form-control form-input" type="text" name="lname" onChange={this.handleChange} value={this.state.lname} />
                        </label>

                        <label>
                            Gender:
<select class=" center form-control form-input" name="gender" onChange={this.handleChange} value={this.state.gender}>

                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>

                        </label>

                        <label>

                            Age:
                <input class=" center form-control form-input" type="number" name="age" onChange={this.handleChange} value={this.state.age} />
                        </label>

                        <label>

                            Email:
                <input class=" center form-control form-input" type="email" name="email" onChange={this.handleChange} value={this.state.email} />
                        </label>
                        <br></br>
                        <label>
                            Password:
                <input class=" center form-control form-input" type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                        </label>

                        <label>
                            Confirm Password:
                <input class=" center form-control form-input" type="password" name="cpassword" onChange={this.handleChange} value={this.state.cpassword} />
                        </label>
                        <br></br>

                        <label>
                            Smoking habits:
<select class=" center form-control form-input" name="smoke" onChange={this.handleChange} value={this.state.smoke}>
                                <option value="NO">No</option>
                                <option value="YES">Yes</option>

                            </select>
                        </label>

                        <br></br>

                        <label>
                            Blood Pressure:
<select  class=" center form-control form-input"name="bloodPressure" onChange={this.handleChange} value={this.state.bloodPressure}>
                                <option value="NO">No</option>
                                <option value="YES">Yes</option>

                            </select>
                        </label>

                        <br></br>

                        <label>
                            diabetes:
<select class=" center form-control form-input" name="diabetes" onChange={this.handleChange} value={this.state.diabetes}>
                                <option value="NO">No</option>
                                <option value="YES">Yes</option>

                            </select>
                        </label>

                        <br></br>
                        <input  class="form-button" type="submit" disabled={!this.handleValidation()} value="Sign Up" onClick={this.handleSubmit} />
                        <input  class="form-button" type="reset" value="Clear" onClick={this.clearData} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }
}
export default SignUpModal;