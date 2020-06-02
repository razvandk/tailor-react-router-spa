import React from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

import "./styles.scss";

const Sales = () => {
  const dispatch = useDispatch();

  const onIncrement = () => dispatch({ type: "INCREMENT_SALES" });
  const onChurn = () => dispatch({ type: "DECREMENT_SALES" });

  const counter = useSelector((state) => state.counter);

  return (
    <div className="sales">
      <h3>Total number of sales: {counter}</h3>
      <button type="button" onClick={onIncrement}>
        Buy iPhone
      </button>
      <button type="button" onClick={onIncrement}>
        Buy Mobile subscription (Fri + Fri)
      </button>
      <button type="button" onClick={onChurn}>
        :(
      </button>
    </div>
  );
};

export default Sales;
