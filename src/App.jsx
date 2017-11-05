import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Messages from './components/MessagesContainer';
import Navbar from './components/Layout/Navbar';
import store from './store';


function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <div className="content">
            <Route exact path="/" component={Landing} />
            <Route path="/messages" component={Messages} />
          </div>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
