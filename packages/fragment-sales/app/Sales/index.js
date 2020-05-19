import React, { Component } from "react";
import "./styles.scss";

class Sales extends Component {
  state = {
    counter: 0,
  };

  onIncrement = () => {
    const { counter } = this.state;
    this.setState(counter + 1);
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="sales">
        <div>
          <h3>Total number of sales: {counter}</h3>
          <button type="button" onClick={onIncrement}>
            Buy iPhone
          </button>
          <button type="button" onClick={onIncrement}>
            Buy Mobile subscription (Fri + Fri)
          </button>
        </div>
      </div>
    );
  }
}

export default Sales;
