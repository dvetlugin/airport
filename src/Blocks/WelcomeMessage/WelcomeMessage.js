import React, { Component } from 'react';
import { connect } from 'react-redux';

import './WelcomeMessage.css';

class WelcomeMessage extends Component {
  render() {
    const { selectedAirport } = this.props.AirPortsReducer;

    if (selectedAirport) return null;

    return (
      <div className="WelcomeMessage">
        <h1>Добро пожаловать!</h1>
        <p>
          Для начала работы – выберете один из аэропортов:
        </p>
      </div>
    )
  }
}

export default connect(
  state => ({
    AirPortsReducer: state.AirPortsReducer,
  }),
)(WelcomeMessage);

