import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './routers/App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers());

const root = createRoot(document.getElementById("app"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

