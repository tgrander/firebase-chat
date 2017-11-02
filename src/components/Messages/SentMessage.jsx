import React from 'react';
import propTypes from 'prop-types';

import './SentMessage.css';


function Message({ text, backgroundColor }) {
  return (

    <div className="sent-message" style={{ backgroundColor: backgroundColor || '#1E9EE0' }}>
      {text}
    </div>
  );
}

Message.propTypes = {
  backgroundColor: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default Message;
