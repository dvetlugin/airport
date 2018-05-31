const InitialState = {
  selectedAirport: null,
};

const AirPorts = (state = InitialState, action) => {
  switch (action.type) {

    case 'SELECT_AIRPORT':
      return {
        ...state,
        selectedAirport: action.airportId
      };

    case 'LOAD_AIRPORTS':
      return {
        ...state,
        isLoading: true
      };

    case 'LOADED_AIRPORTS':
      return {
        ...state,
        airPorts: action.data,
        isLoading: false
      };

    case 'LOAD_AIRPORTS_FAILED':
      return {
        ...state,
        isLoading: false
      };

    default:
      return state
  }
};

export default AirPorts;