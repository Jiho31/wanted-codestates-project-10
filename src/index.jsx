import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import rootReducer from './modules';
// import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { store } from './store';

// const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
