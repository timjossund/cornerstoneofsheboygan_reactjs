import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Salvation from './pages/salvation';
import About from './pages/about';
import Listen from './pages/listen';
import Staff from './pages/staff';
import Contact from './pages/contact'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/salvation" component={Salvation} />
          <Route path="/about" component={About} />
          <Route path="/staff" component={Staff} />
          <Route path="/listen" component={Listen} />
          <Route path="/contact" component={Contact} />
      </BrowserRouter>
    )
  }
}

export default App;
