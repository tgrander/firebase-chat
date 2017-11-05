import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import ChangeColor from './components/ChangeColor';
import Landing from './components/Landing';
import MessagesContainer from './components/MessagesContainer';
import Navbar from './components/Layout/Navbar';
import TextInputContainer from './components/TextInputContainer';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <div className="content">
          <Landing />
        </div>
      </div>
    </Provider>
  );
}

export default App;
