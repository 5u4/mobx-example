import React from "react";
import { inject, observer } from "mobx-react";
import CounterStore from "./store/CounterStore";

const App: React.FC<{ CounterStore: CounterStore }> = ({ CounterStore }) => {
  return (
    <div>
      <div>{CounterStore.count}</div>
      <button onClick={() => CounterStore.decrement()}>Decrement</button>
      <button onClick={() => CounterStore.increment()}>Increment</button>
    </div>
  );
};

export default inject("CounterStore")(observer(App));
