import React, { Component } from 'react';
import Nav from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';
import Spacer from '../components/spacer';
import Sermons from '../components/sermon';
import './listen.css';

export default class Listen extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Header />
                <Spacer />
                <div><h3 className="sermonPageTitle">Featured Sermons</h3></div>
                <Sermons />
                <Footer />
            </div>
        )
    }
}