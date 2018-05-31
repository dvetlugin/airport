import React, { Component } from 'react';

import Header from '../../Blocks/Header/Header';
import WelcomeMessage from '../../Blocks/WelcomeMessage/WelcomeMessage';
import AirPorts from '../../Blocks/AirPorts/AirPorts';
import AirCrafts from '../../Blocks/AirCrafts/AirCrafts';

import './Main.css';

class Main extends Component {

  render() {
    return (
      <div className="Main">
        <Header />
        <WelcomeMessage />

        <div className="Main-menu">
          <AirPorts />
        </div>

        <div className="Main-table">
          <AirCrafts />
        </div>

      </div>
    );
  }
}

export default Main
