import React from "react";
import {Modal,Button} from 'react-bootstrap';


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
               <Modal show="true" onHide={this.closeModal}>
            <Modal.Header closeButton>
            <Modal.Title>Log In </Modal.Title>
          </Modal.Header>
          <Modal.Body>
                    <div>Enter the following Information</div>
                   
                    <label>
                            Email:
                <input  type="email" name="email" onChange={this.handleChange} value={this.state.email} />
                        </label>
                        <br></br>
                        <label>
                            Password:
                <input  type="password" name="password" onChange={this.handleChange}  value={this.state.password}/>
                        </label>

                      <br></br>
                        <input type="submit" disabled={!this.handleValidation()} value="Submit" onClick={this.handleSubmit}/>
                        <input type="reset" value="Reset" onClick={this.clearData} />
                        </Modal.Body>
                    <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
                </Modal>

            </div>
        );
    }
}
export default LoginModal;