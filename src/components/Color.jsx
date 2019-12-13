import React, { Component } from "react";

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buscolor: "Red"
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(state);
    return { buscolor: props.buscolor };
  }

  render() {
    return (
      <h1>
        Hello React! {this.props.bus}
        {this.state.buscolor}
      </h1>
    );
  }
}

export default Color;
