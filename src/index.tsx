import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CounterStore from "./store/CounterStore";

ReactDOM.render(
  <App CounterStore={new CounterStore()} />,
  document.getElementById("root")
);
