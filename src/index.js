import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import applicationStore from './store/index'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = applicationStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
