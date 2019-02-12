import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './welcome.css';

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome container-fluid" id="welcome">
        <div className="row justify-content-center">
          <h3 className="col-12 welcomeh3 animated fadeIn 4s"> A personal welcome </h3>
          <p className="col-12 welcomep animated fadeIn 4s"> from Pastor Jossund </p>
          <div className="col-12">
            <Image src="assets/pastorjossund.jpg" className="welcomepic"/>
          </div>
          <p className="welcomep2 col-sm-12 col-lg-7">Cornerstone is a thriving and biblically focused church. We have found God’s Word to be true and are building on its sure foundation. God has added many wonderful people since we started in 2011. Join us for our next worship service and we believe you will be drawn to praise God with us for the great things He has done!</p>
          <div className="col-12">
            <Button className="btn-lg wbutton" variant="outline-dark" href="/about">Learn More</Button>
          </div>
        </div>
      </div>
    )
  }
}
