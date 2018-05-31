import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AirCraftsReducer from './Blocks/AirCrafts/reducer';
import AirPortsReducer from './Blocks/AirPorts/reducer';
import MainPage from './Pages/Main/Main'; /* здесь будет роутер если нужно много Pages */
import registerServiceWorker from './assets/js/registerServiceWorker';

import './index.css';

const store = createStore(
  combineReducers({
    AirCraftsReducer,
    AirPortsReducer
  }),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
