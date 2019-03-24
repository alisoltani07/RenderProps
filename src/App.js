import React, { Component } from 'react';
import WithActiveTab from './withActiveTab';
import ActiveDetaile from './ActiveDetaile';
import NetworkActiveVisual from './NetworkActiveVisual';
import WithNetworkStatus from './withNetworkstatus';

export default class App extends Component {
  render() {
    return (
      <>
        <WithActiveTab>
          {({ isActive: isTabActive }) => (
            <WithNetworkStatus>
              {({ isActive: isOnline }) => (
                <NetworkActiveVisual
                  isTabActive={isTabActive}
                  isOnline={isOnline}
                />
              )}
            </WithNetworkStatus>
          )}
        </WithActiveTab>

        <NetworkActiveVisual isOnlineColor={'green'} isOfflineColor={'red'} />
      </>
    );
  }
}
