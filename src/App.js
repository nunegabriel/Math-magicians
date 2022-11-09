/* eslint-disable */

import React, { Component } from 'react';
import Calculator from './components/Calculator';
import Home from './components/pages/Home';
import Navbar from './components/pages/Navbar';
import Quote from './components/pages/Quote';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Router>

    );
  }
}

export default App;
