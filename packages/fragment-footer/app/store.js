import { createStore, compose } from "redux";

const salesState = {
  counter: 0,
};

function counter(state = salesState, action) {
  switch (action.type) {
    case "INCREMENT_SALES":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT_SALES":
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - 1 : 0,
      };
    default:
      return state;
  }
}

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = composeEnhancers()(createStore);

export default store(counter);
