import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bus: "BMW"
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(state);
    return { bus: props.bustype };
  }

  render() {
    return <h1>Hello React!</h1>;
  }
}

export default App;
