import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline'

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <CssBaseline/ >
      <App />
    </Fragment>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
