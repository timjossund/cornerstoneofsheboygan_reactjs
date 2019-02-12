import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './contactSection.css';

export default class ContactSection extends Component {
    render() {
        return (
            <div className="contactSection">
                <div className="ContactInfo">
                    <h3 className="contactTitle">Contact Info</h3>
                    <h3 className="c-h3">Meeting Place:</h3>
                    <p className="c-p">3836 Enterprise Drive</p>
                    <p className="c-p">Sheboygan, WI</p>
                    <h3 className="c-h3">Service Times:</h3>
                    <p className="c-p">Sunday School @ 10am</p>
                    <p className="c-p">Sunday Morning @ 11am</p>
                    <p className="c-p">Sunday Evening @ 6pm</p>
                    <p className="c-p">Wednesday @ 7pm</p>
                </div>
                <div className="ContactForm">
                    <h3 className="contactTitle">Contact Us</h3>
                    <Form>
                        <Form.Row className="mb-3">
                            <Col>
                            <Form.Control type="input" placeholder="First name" className="firstnamearea" />
                            </Col>
                            <Col>
                            <Form.Control type="input" placeholder="Last name" className="lastnamearea" />
                            </Col>
                        </Form.Row>
                        <Form.Group>
                            <Form.Control type="email" placeholder="Enter email" className="emailarea" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="textarea" rows="5" placeholder="Enter Message" className="messagearea" />
                        </Form.Group>
                        <div className="emailButtonDiv">
                            <Button variant="primary" type="submit" className="emailButton btn-lg">
                            Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}