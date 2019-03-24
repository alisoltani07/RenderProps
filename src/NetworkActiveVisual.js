import React, { Component } from "react";

export default class NetworkActiveVisual extends Component {
  render() {
    return (
      <div
        style={{
          width: 150,
          height: 150,
          backgroundColor: this.props.isTabActive
            ? this.props.isOnlineColor
            : this.props.isOfflineColor
        }}
      />
    );
  }
}
