import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import './navbar.css';

export default class Nav extends Component {
  showSettings(event) {
    event.preventDefault();

  }

  render() {
    return (
      <Menu right>
        <div><h3 className="menu-title">Menu</h3></div>
        <a id="home" className="menu-item m-i" href="/">Home</a>
        <a id="about" className="menu-item m-i" href="/salvation">Jesus</a>
        <a id="about" className="menu-item m-i" href="/about">About</a>
        <a id="about" className="menu-item m-i" href="/staff">Staff</a>
        <a id="about" className="menu-item m-i" href="/listen">Listen</a>
        <a id="contact" className="menu-item m-i" href="/contact">Contact</a>
      </Menu>
    );
  }
}
