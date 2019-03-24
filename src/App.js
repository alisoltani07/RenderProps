import React, { Component } from "react";
import withActiveTab from "./withActiveTab";
import ActiveDetaile from "./ActiveDetaile";
import NetworkActiveVisual from "./NetworkActiveVisual";
import withNetworkStatus from "./withNetworkstatus";

export default class App extends Component {
  render() {
    return (
      <>
        <withActiveTab>
          {({ isActive: isTabActive }) => (
            <withNetworkStatus>
              {({ isActive: isOnline }) => (
                <NetworkActiveVisual
                  isTabActive={isTabActive}
                  isOnline={isOnline}
                />
              )}
            </withNetworkStatus>
          )}
        </withActiveTab>

        <NetworkActiveVisual isOnlineColor={"green"} isOfflineColor={"red"} />
      </>
    );
  }
}
