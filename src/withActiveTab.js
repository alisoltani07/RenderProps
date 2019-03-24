import React, { Component } from "react";

export default class withActiveTab extends Component {
  state = {
    isTabActive: !document.hidden
  };
  componentDidMount() {
    document.addEventListener("changevisibility", this.handleVisibilityChange);
  }
  handleVisibilityChange = event => {
    if (document.addEventListener) {
      this.setState({
        isTabActive: !event.target.hidden
      });
    }
  };

  render() {
    return this.props.children({ isActive: this.state.isTabActive });
  }
}
