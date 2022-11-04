import React, { Component } from 'react';
import calculate from './logic/calculate';

import '../App.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(e) {
    this.setState((items) => calculate({
      total: items.total,
      operation: items.operation,
      next: items.next,
    }, e.target.name));
  }

  render() {
    const { next, total, operation } = this.state;

    return (

      <div className="calculator">
        <div id="display">{next || operation || total || 0}</div>
        <div className="keys">
          <div className="row">
            <button onClick={this.clickEvent} className="btn" name="AC" type="submit">AC</button>
            <button onClick={this.clickEvent} className="btn" name="+" type="submit">-/+</button>
            <button onClick={this.clickEvent} className="btn" name="%" type="submit">%</button>
            <button onClick={this.clickEvent} className="btn-o" name="÷" type="submit">÷</button>
          </div>
          <div className="row">
            <button onClick={this.clickEvent} className="btn" name="7" type="submit">7</button>
            <button onClick={this.clickEvent} className="btn" name="8" type="submit">8</button>
            <button onClick={this.clickEvent} className="btn" name="9" type="submit">9</button>
            <button onClick={this.clickEvent} className="btn-o" name="x" type="submit">x</button>
          </div>
          <div className="row">
            <button onClick={this.clickEvent} className="btn" name="4" type="submit">4</button>
            <button onClick={this.clickEvent} className="btn" name="5" type="submit">5</button>
            <button onClick={this.clickEvent} className="btn" name="6" type="submit">6</button>
            <button onClick={this.clickEvent} className="btn-o" name="-" type="submit">-</button>
          </div>
          <div className="row">
            <button onClick={this.clickEvent} className="btn" name="1" type="submit">1</button>
            <button onClick={this.clickEvent} className="btn" name="2" type="submit">2</button>
            <button onClick={this.clickEvent} className="btn" name="3" type="submit">3</button>
            <button onClick={this.clickEvent} className="btn-o" name="+" type="submit">+</button>
          </div>
          <div className="row">
            <button onClick={this.clickEvent} className="btn" name="0" id="zero" type="submit">0</button>
            <button onClick={this.clickEvent} className="btn" name="." type="submit">.</button>
            <button onClick={this.clickEvent} className="btn-o" name="=" type="submit">=</button>
          </div>

        </div>
      </div>
    );
  }
}

export default Calculator;
