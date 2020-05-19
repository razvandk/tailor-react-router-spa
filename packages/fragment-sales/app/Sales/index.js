import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.scss";

class Sales extends Component {
  render() {
    const { onIncrement, counter } = this.props;

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

const mapProps = (counter) => ({ counter });

const mapActions = {
  onIncrement: () => ({ type: "INCREMENT_SALES" }),
};

export default connect(mapProps, mapActions)(Sales);
