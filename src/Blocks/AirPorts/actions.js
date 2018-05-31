import stabData from '../../assets/json/airPortsData'

export function loadAirPorts() {
  return (dispatch) => {

    dispatch({ type: 'LOAD_AIRPORTS' });

    return fetch(`api/airports/`)
      .then(
        data => {
          const success = () => dispatch({type: 'LOADED_AIRPORTS', data: stabData });
          setTimeout(success, 1000)
        },
        err =>
          dispatch({ type: 'LOAD_AIRPORTS_FAILED', err })
      );

  };
}