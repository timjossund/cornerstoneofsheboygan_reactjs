import React, { Component } from 'react';
import NavLink from 'react-bootstrap/NavLink';
import './hero.css';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero animated fadeIn 2s mt-50">
        <div className="container-fluid">
            <h1 className="herotext1 animated fadeInDown 4s"> Reaching Sheboygan, WI </h1>
            <h3 className="herotextp animated fadeInUp 4s"> with the Gospel of Jesus Christ </h3>
            <div className="down animated bounce slower">
              <NavLink href="/#down">
                <i className="fas fa-arrow-circle-down" id="down"></i>
              </NavLink>
            </div>
        </div>
      </div>
    )
  }
}
