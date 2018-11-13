import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap';


class HowToUse extends Component {

    constructor(props) {
        super(props);
        this.state = {



        }


    }

    render() {
        return (

            <div>

                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Guidlines to use Chat-Predection-System</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>

                        <ListGroup>
                            <ListGroupItem>1. Start by entering Name </ListGroupItem>
                            <ListGroupItem bsStyle="info">2. Enter Symptoms</ListGroupItem>
                            <ListGroupItem>3. System will keep asking you for more symptoms till you click on <b>No more symtom </b>button</ListGroupItem>
                            <ListGroupItem bsStyle="info">4. See the output from our system.</ListGroupItem>
                            <ListGroupItem>5. Take Home remedies as suggested by our system </ListGroupItem>
                            <ListGroupItem bsStyle="info">6. Visit Again.</ListGroupItem>
                        </ListGroup>
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}

export default HowToUse;
