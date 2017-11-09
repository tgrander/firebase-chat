import map from 'lodash/map';
import propTypes from 'prop-types';
import React from 'react';
import ReceivedMessage from './Messages/ReceivedMessage';
import SentMessage from './Messages/SentMessage';
import TextInput from './Messages/TextInputContainer';
import Landing from './LandingContainer';

import './Messages.css';


function Messages({ messages, userId, isAuthorized }) {
  if (isAuthorized) {
    return <Landing />;
  }
  return (
    <div className="messages-container">
      <div className="messages">
        { map(messages, message => (message.userId === userId
                ? <SentMessage key={message.messageId} message={message} />
                : <ReceivedMessage key={message.messageId} message={message} />)) }
      </div>
      <TextInput />
    </div>
  );
}

Messages.propTypes = {
  messages: propTypes.array.isRequired,
};

export default Messages;
