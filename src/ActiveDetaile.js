import React, { Component } from "react";

export default class ActiveDetaile extends Component {
  render() {
    return (
      <div>
        <h2>Device is Online: {String(this.props.isOnline)}</h2>
        <h2>TabActive: {String(this.props.isTabActive)}</h2>
      </div>
    );
  }
}
