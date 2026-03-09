import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

handleIncrement = (counter) => {
    console.log("event handler called ",counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters});
  };

  handleDelete = (counterId) => {
    console.log("event handler called ",counterId);
    const counters = this.state.counters.filter(c => c.id != counterId);
    this.setState({ counters});
  };
  render() {
    return (
      <div>
        <h1>Lets learn react</h1>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement = {this.handleIncrement}
            counter1={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
