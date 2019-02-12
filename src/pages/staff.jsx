import React, { Component } from 'react';
import Nav from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';
import AboutPJ from '../components/aboutpj';
import Spacer from '../components/spacer';
import './staff.css';

export default class Staff extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Header />
                <div className="mainDivStaff">
                    <AboutPJ />
                </div>
                <Spacer />
                <Footer />
            </div>
         )
    }
}