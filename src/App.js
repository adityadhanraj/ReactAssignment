import React from "react";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.start
    };
  }

  increment = () => {
    this.setState({counter: this.state.counter + 1})
  }

  decrement = () => {
    this.setState({counter: this.state.counter - 1});
  }

  render() {
    return (
      <div>
      <h1>Counter App</h1>
      <h4> Current Value: {this.state.counter}</h4>
        <button onClick={this.increment}>Increase Counter</button>
        <button onClick={this.decrement}>Decrease Counter</button>
      </div>
    );
  }
}

export default App;
