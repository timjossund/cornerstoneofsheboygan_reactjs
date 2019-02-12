import React, { Component } from 'react';
import Nav from '../components/navbar';
import Header from '../components/header';
import POSalvation from '../components/pos';
import Footer from '../components/footer';

export default class Salvation extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <POSalvation />
        <Footer />
      </div>
    )
  }
}
