import React, { Component } from 'react';
import Nav from '../components/navbar';
import Header from '../components/header';
import Map from '../components/map';
import Footer from '../components/footer';
import ContactSection from '../components/contactSection';
import Spacer from '../components/spacer';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Header />
                <Spacer />
                <ContactSection />
                <Map />
                <Footer />
            </div>

        )
    }
}