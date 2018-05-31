import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from '../../Elements/Loader/Loader';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

class AirPorts extends Component {

  render() {
    const { AirCrafts, isLoading } = this.props.AirCraftsReducer;
    const { selectedAirport } = this.props.AirPortsReducer;
    const selectedTable = AirCrafts && AirCrafts[selectedAirport];

    if (isLoading) return <Loader />;

    if (selectedTable)
      return selectedTable.map((craft, ind) =>
        <ProgressBar now={craft.count} label={`${craft.name} - ${craft.count}`} />
      );

    return null;
  }
}

export default connect(
  state => ({
    AirPortsReducer: state.AirPortsReducer,
    AirCraftsReducer: state.AirCraftsReducer,
  }),
)(AirPorts);
