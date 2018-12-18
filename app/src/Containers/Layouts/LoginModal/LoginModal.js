import React from "react";
import {Modal,Button} from 'react-bootstrap';

import "./login.css";

//Modal.setAppElement('#root')
class LoginModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {email:'',password:''}
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
        let data =this.state;
        this.props.callback(data);
    }
    handleValidation() 
    {
        //make sure all the properties are non empty
        const valid = (this.state.email !== ''  && this.state.password !== '');
        return valid;
    }


    closeModal() {
        this.props.onClose();
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
            <div id="modalContainer">
                <Modal class="modal-body" show="true" onHide={this.closeModal}>
                    <Modal.Header closeButton class="modal-title">
                        <Modal.Title >Log In </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div class="info-header">Enter the following Information</div>

                        <input placeholder="abc@gmail.com" type="email" name="email" onChange={this.handleChange} value={this.state.email} class=" form-control form-input" />

                        <br></br>

                        <input placeholder="Password" type="password" name="password" onChange={this.handleChange} value={this.state.password} className="form-control form-input" />

                        <br></br>
                        <input type="submit" disabled={!this.handleValidation()} value="Submit" onClick={this.handleSubmit} className="button" />
                        <input type="reset" value="Reset" onClick={this.clearData} class="button" />
                    </Modal.Body>
                    <Modal.Footer class="modal-footer">
                        <Button onClick={this.closeModal} class="button">Close</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }
}
export default LoginModal;