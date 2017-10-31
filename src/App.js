import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChangeColor from './components/ChangeColor'
import Messages from './components/Messages'
import TextInput from './components/TextInput'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Messages />
          <div className="input-area">
              <TextInput />
              <ChangeColor />
          </div>
      </div>
    );
  }
}

export default App;
