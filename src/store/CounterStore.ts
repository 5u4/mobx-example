import { observable, decorate, action } from "mobx";

class CounterStore {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

decorate(CounterStore, {
  count: observable,
  increment: action,
  decrement: action
});

export default CounterStore;
