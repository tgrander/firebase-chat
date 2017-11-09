import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import store from './store';


const Index = () => (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);


ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
