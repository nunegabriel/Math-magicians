import React, { Component } from 'react';

import '../App.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <input id="display" />
        <div className="keys">
          <div className="row">
            <button className="btn" type="submit">AC</button>
            <button className="btn" type="submit">-/+</button>
            <button className="btn" type="submit">%</button>
            <button className="btn-o" type="submit">-</button>
          </div>
          <div className="row">
            <button className="btn" type="submit">7</button>
            <button className="btn" type="submit">8</button>
            <button className="btn" type="submit">9</button>
            <button className="btn-o" type="submit">x</button>
          </div>
          <div className="row">
            <button className="btn" type="submit">4</button>
            <button className="btn" type="submit">5</button>
            <button className="btn" type="submit">6</button>
            <button className="btn-o" type="submit">-</button>
          </div>
          <div className="row">
            <button className="btn" type="submit">1</button>
            <button className="btn" type="submit">2</button>
            <button className="btn" type="submit">3</button>
            <button className="btn-o" type="submit">+</button>
          </div>
          <div className="row">
            <button className="btn" id="zero" type="submit">0</button>
            <button className="btn" type="submit">.</button>
            <button className="btn-o" type="submit">=</button>
          </div>

        </div>
      </div>
    );
  }
}

export default Calculator;
