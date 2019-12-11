import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bus: "BMW"
    };
  }

  //   static getDerivedStateFromProps(props, state) {
  //     console.log(state);
  //     return { bus: props.bustype };
  //   }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ bus: "Volvo" });
    }, 3000);
  }

  render() {
    return <h1>Hello React! {this.state.bus}</h1>;
  }
}

export default App;
