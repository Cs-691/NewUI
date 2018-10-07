import React from "react";
import Modal from 'react-modal';


Modal.setAppElement('#root')
class SignUpModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = { fname: '', lname: '', email: '', gender:'male',password:'',cpassword:'',age:'' }
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
        this.props.callback(data);
    }
    handleValidation() {
        //make sure all the properties are non empty
        const valid = (this.state.email !== '' && this.state.password !== '');
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
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }
        };

        return (
            <div id="modalContainer">
                <Modal
                    isOpen
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Modal"
                    style={customStyles}>

                    <button onClick={this.closeModal}>close</button>
                    <div>Enter the following Information</div>


                    <label>
                        First Name:
                <input type="text" name="fname" onChange={this.handleChange} value={this.state.fname} />
                    </label>

                    <label>
                        Last Name:
                <input type="text" name="lname" onChange={this.handleChange} value={this.state.lname} />
                    </label>

                    <label>
                        Gender:
<select name="gender" onChange={this.handleChange} value={this.state.gender}>

                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>

                    </label>

                    <label>

                        Age:
                <input type="number" name="age" onChange={this.handleChange} value={this.state.age} />
                    </label>

                    <label>

                        Email:
                <input type="email" name="email" onChange={this.handleChange} value={this.state.email} />
                    </label>

                    <label>
                        Password:
                <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                    </label>

                    <label>
                        Confirm Password:
                <input type="password" name="cpassword" onChange={this.handleChange} value={this.state.cpassword} />
                    </label>

                    <input type="submit" disabled={!this.handleValidation()} value="Submit" onClick={this.handleSubmit} />
                    <input type="reset" value="Reset" onClick={this.clearData} />

                </Modal>

            </div>
        );
    }
}
export default SignUpModal;