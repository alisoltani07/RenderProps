import React, { Component } from 'react';

export default class withNetworkStatus extends Component {
  state = {
    isActive: navigator.onLine,
  };
  componentDidMount() {
    window.addEventListener('online', this.statusChange);
    window.addEventListener('offline', this.statusChange);
  }
  componentWillUnmount() {
    window.removeEventListener('online', this.statusChange);
    window.removeEventListener('offline', this.statusChange);
  }
  statusChange = event => {
    if (event.type) {
      this.setState({
        isActive: event.type === 'online',
      });
    }
  };
  render() {
    return this.props.children({ isActive: this.state.isActive });
  }
}
