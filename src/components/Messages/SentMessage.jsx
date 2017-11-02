import React from 'react';
import propTypes from 'prop-types';

import './SentMessage.css';


function Message({ message }) {
  return (

    <div className="sent-message" style={{ backgroundColor: message.color }}>
      {message.value}
    </div>
  );
}

Message.propTypes = {
  message: propTypes.object.isRequired,
};

export default Message;
