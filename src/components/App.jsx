import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bus: "BMW"
    };
  }
  render() {
    return <h1>Hello React!</h1>;
  }
}

export default App;
