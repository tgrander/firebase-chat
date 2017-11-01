import React from 'react';
import './App.css';
import ChangeColor from './components/ChangeColor';
import Messages from './components/Messages';
import TextInput from './components/TextInput';


function App() {
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

export default App;
