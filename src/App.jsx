import propTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Landing from './components/LandingContainer';
import Messages from './components/MessagesContainer';
import Navbar from './components/Layout/NavbarContainer';
import { auth, db } from './firebase';
import RedirectIfAuthorized from './hoc/RedirectIfAuthorized';


class App extends React.Component {
  componentWillMount() {
    db.collection('messages').orderBy('timeStamp')
      .onSnapshot(querySnapshot => this.props.fetchMessagesSuccess(querySnapshot));

    auth.onAuthStateChanged((user) => {
      if (user) {
        this.props.authorizeUser(user.uid);
      } else {
        this.props.signOut();
      }
    });
  }

  componentWillUnmount() {
    // this.unsubscribeQueryListener();
    // this.unsubscribeAuthListener();
  }

  render() {
    const { props } = this;

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
  fetchMessagesSuccess: propTypes.func.isRequired,
  signOut: propTypes.func.isRequired,
};

export default App;
