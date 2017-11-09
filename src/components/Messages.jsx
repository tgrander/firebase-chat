import map from 'lodash/map';
import propTypes from 'prop-types';
import React from 'react';
import SentMessage from './Messages/SentMessage';
import TextInput from './Messages/TextInputContainer';

import './Messages.css';


function Messages({ messages }) {
  return (
    <div className="messages-container">
      <div className="messages">
        { map(messages, message => <SentMessage message={message} />) }
      </div>
      <TextInput />
    </div>
  );
}

Messages.propTypes = {
  messages: propTypes.array.isRequired,
};

export default Messages;
