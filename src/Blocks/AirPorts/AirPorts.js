import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadAirPorts } from '../../Blocks/AirPorts/actions.js';
import { loadAirCrafts } from '../../Blocks/AirCrafts/actions.js';

import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Loader from '../../Elements/Loader/Loader';

class AirCrafts extends Component {
  componentWillMount() {
    this.props.loadAirPorts();
  }

  handleSelect = (selectedKey) => {
    this.props.loadAirCrafts(selectedKey);
  };

  render() {
    const { isLoading, airPorts } = this.props.AirPortsReducer;

    if (isLoading) return <Loader />;

    if (airPorts)
      return (
        <Nav bsStyle="pills" onSelect={this.handleSelect}>
          {
            airPorts.map(airPort =>
              <NavItem eventKey={airPort.id} title={airPort.label}>
                {airPort.label}
              </NavItem>
            )
          }
        </Nav>
      );

    return null;
  }
}

export default connect(
  state => ({
    AirPortsReducer: state.AirPortsReducer,
  }),
  dispatch => bindActionCreators({ loadAirCrafts, loadAirPorts }, dispatch)
)(AirCrafts);