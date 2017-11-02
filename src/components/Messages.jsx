import propTypes from 'prop-types';
import React from 'react';
import SentMessage from './Messages/SentMessage';

import './Messages.css';


function Messages({ messages }) {
  return (
    <div className="messages">
      { messages.map(message => <SentMessage value={message} />) }
    </div>
  );
}

Messages.propTypes = {
  messages: propTypes.array.isRequired,
};

export default Messages;
