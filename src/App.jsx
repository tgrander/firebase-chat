import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import ChangeColor from './components/ChangeColor';
import MessagesContainer from './components/MessagesContainer';
import TextInputContainer from './components/TextInputContainer';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
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
