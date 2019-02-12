import React, { Component } from 'react';
import './header.css'

export default class Header extends Component {
    render () {
        return (
            <div className="header">
                <img src="../assets/cbclogo.png" className="logo" alt=""/>
            </div>
        )
    }    
}