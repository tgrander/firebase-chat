import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import Landing from './components/LandingContainer';
import Messages from './components/MessagesContainer';
import Navbar from './components/Layout/Navbar';
import store from './store';
import { auth } from './firebase';


class App extends React.Component {
  componentWillMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { email, uid } = user;
        console.log('USER IS SIGNED IN ', uid);
      } else {
        console.log('USER IS NOT SIGNED IN');
      }
    });
  }

  render() {
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
}

export default App;
