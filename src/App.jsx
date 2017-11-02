import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import ChangeColor from './components/ChangeColor';
import MessagesContainer from './components/MessagesContainer';
import Navbar from './components/Layout/Navbar';
import TextInputContainer from './components/TextInputContainer';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <MessagesContainer />
        <div className="input-area">
          <TextInputContainer />
          <ChangeColor />
        </div>
      </div>
    </Provider>
  );
}

export default App;
