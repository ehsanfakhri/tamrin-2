import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  increment5 = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 5,
      };
    });
  };

  decrement = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  };

  decrement5 = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 5,
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment + 1</button>
        <button onClick={this.decrement}>Decrement - 1</button>
        <button onClick={this.increment5}>Increment + 5</button>
        <button onClick={this.decrement5}>Decrement - 5</button>
      </div>
    );
  }
}

export default Counter;
