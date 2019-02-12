import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import './jesus.css';

export default class Jesus extends Component {
  render() {
    return (
      <div>
        <div className="salvation">
            <h3 className="jesush3"> Have a personal relationship with God! </h3>
            <p className="jesusp"> God wants you to know for sure that you are saved, and that your sins have been forgiven. </p>
          <Button className="btn-lg js-button" variant="outline-dark" href="/salvation">Learn More</Button>
        </div>
      </div>
    )
  }
}
