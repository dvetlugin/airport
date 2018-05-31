const InitialState = {
  AirCrafts: {},
  isLoading: false,
};

const AirCrafts = (state = InitialState, action) => {
  switch (action.type) {

    case 'LOAD_AIRCRAFTS':
      return {
        ...state,
        isLoading: true
      };

    case 'LOADED_AIRCRAFTS':
      state.AirCrafts[action.airportId] = action.data;
      return {
        ...state,
        isLoading: false
      };

    case 'LOAD_AIRCRAFTS_FAILED':
      return {
        ...state,
        isLoading: false
      };


    default:
      return state
  }
};

export default AirCrafts;