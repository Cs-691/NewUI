import React, { Component } from 'react';
import { getUserAPI ,updateAPI} from '../../../api/UserOpreations';
import NavigationBar from '../../../Components/NavigationBar';


class ProfilePage extends Component {
    constructor(props) {
        super(props);
        if(sessionStorage.getItem('id')==undefined ||sessionStorage.getItem('id')==null )
        {
            alert("You must log in first")
            window.location.href = 'http://localhost:3000';

        }



        var id = sessionStorage.getItem('id');
      //  alert(id);
        this.state = { fname: '', lname: '', email: '', gender: 'male', password: '', npassword: '', age: '' }
        // preserve the initial state in a new object
        this.baseState = this.state;

        this.updateUser = this.updateUser.bind(this);

    

        this.handleChange = this.handleChange.bind(this);
        this.handleValidation = this.handleValidation.bind(this);

        this.logout = this.logout.bind(this);
        this.getUser = this.getUser.bind(this);
        this.getUser(id);
    }
    logout()
    {
      this.setState({ email: '' });
      sessionStorage.removeItem('id');
      sessionStorage.removeItem('name')
      alert("Logged out!")
    }
    updateUser() {
        var data = this.state;

        updateAPI(JSON.stringify(data))
            .then(data => {

               alert("data updated !")
            })
            .catch((err) => {
                console.log(err);
                alert("Soemthing went wrong!")
            })
    }

    getUser(id) {

        getUserAPI(id)
            .then(data => {
                this.setState({ fname: data.firstName });
                this.setState({ lname: data.lastName });
                this.setState({ age: data.age });
                this.setState({ email: data.email });
                this.setState({ gender: data.gender });
                this.setState({ password: data.password });
                this.setState({ smoke: data.smoke });
                this.setState({ diabetes: data.diabetes });
                this.setState({ bloodPressure: data.bloodPressure });
                console.log(data);
                //goto profile page
            })
            .catch((err) => {
                console.log(err);
                alert("Something went wrong!")
            })
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleValidation() {
        //make sure all the properties are non empty
        const valid = (this.state.email !== '' && this.state.password !== '');
        return valid;
    }

    render() {



        return (
           
            <div>
<NavigationBar></NavigationBar>
                <label>
                    First Name:
                <input type="text" name="fname" onChange={this.handleChange} value={this.state.fname} />
                </label>
<br/><br/>
                <label>
                    Last Name:
                <input type="text" name="lname" onChange={this.handleChange} value={this.state.lname} />
                </label>
                <br/><br/>
                <label>
                    Gender:
<select name="gender" onChange={this.handleChange} value={this.state.gender}>

                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                </label>
                <br/><br/>
                <label>

                    Age:
                <input type="number" name="age" onChange={this.handleChange} value={this.state.age} />
                </label>
                <br/><br/>
                <label>

                    Email:
                <input type="email" name="email" readOnly value={this.state.email} />
                </label>

<br/><br/>
                <label>
                    Current Password:
                <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                </label>
                <br/><br/>
                <label>
                    New Password:
                <input type="password" name="npassword" onChange={this.handleChange} value={this.state.npassword} />
                </label>
                <br/><br/>

                <label>
                            Smoking habits:
<select name="smoke" onChange={this.handleChange} value={this.state.smoke}>
                                <option value="NO">No</option>
                                <option value="YES">Yes</option>

                            </select>
                        </label>

                        <br></br>

                        <label>
                            Blood Pressure:
<select name="bloodPressure" onChange={this.handleChange} value={this.state.bloodPressure}>
                                <option value="NO">No</option>
                                <option value="YES">Yes</option>

                            </select>
                        </label>

                        <br></br>

                        <label>
                            diabetes:
<select name="diabetes" onChange={this.handleChange} value={this.state.diabetes}>
                                <option value="NO">No</option>
                                <option value="YES">Yes</option>

                            </select>
                        </label>



<br/><br/>
                <input type="submit" disabled={!this.handleValidation()} value="Update" onClick={this.updateUser} />


            </div>
        )
    }
}
export default ProfilePage;