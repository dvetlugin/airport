import stabData from '../../assets/json/airCraftsData'

export function loadAirCrafts(airportId) {
  return (dispatch) => {

    dispatch({ type: 'LOAD_AIRCRAFTS' });
    dispatch({ type: 'SELECT_AIRPORT', airportId });

    return fetch(`api/airport/${airportId}/aircrafts`)
      .then(
        data => {
          const success = () => dispatch({type: 'LOADED_AIRCRAFTS', airportId, data: stabData[airportId] });
          setTimeout(success, 1000)
        },
        err =>
          dispatch({ type: 'LOAD_AIRCRAFTS_FAILED', err })
      );

  };
}