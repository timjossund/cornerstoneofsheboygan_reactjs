import React, { Component } from 'react';
import './home.css';
import Nav from '../components/navbar';
import Hero from '../components/hero';
import Welcome from '../components/welcome';
import Jesus from '../components/jesus';
import Walk from '../components/walk';
import ContactSection from '../components/contactSection';
import Header from '../components/header';
import Map from '../components/map';
import Footer from '../components/footer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav right />
        <Header />
        <div>
          <Hero />
          <div>
            <Welcome />
            <div>
              <Walk />
              <div>
                <Jesus />
                <div>
                  <ContactSection />
                  <div>
                    <Map />
                    <div>
                      <Footer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
