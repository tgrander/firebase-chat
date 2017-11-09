import propTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Landing from './components/LandingContainer';
import Messages from './components/MessagesContainer';
import Navbar from './components/Layout/Navbar';
import { auth } from './firebase';


class App extends React.Component {
  componentWillMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.props.authorizeUser(user.uid);
      } else {
        console.log('USER IS NOT SIGNED IN');
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Route exact path="/" component={Landing} />
          <Route path="/messages" component={Messages} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  authorizeUser: propTypes.func.isRequired,
};

export default App;
