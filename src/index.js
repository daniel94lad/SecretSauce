import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routers/App';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { recipesReducer } from './reducers';

const root = ReactDOM.createRoot(document.getElementById('app'));

const store = createStore(
  recipesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

