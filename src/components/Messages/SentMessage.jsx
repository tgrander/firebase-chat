import React from 'react';
import propTypes from 'prop-types';
import { Icon } from 'antd';

import './SentMessage.css';


function Message({ message }) {
  return (

    <div className="message-container">
      <div className="sent-message" style={{ backgroundColor: message.color }}>
        <div className="message-value">{message.value}</div>
      </div>
      <Icon type="check-circle-o" style={{ color: '#18A757' }} />
    </div>
  );
}

Message.propTypes = {
  message: propTypes.object.isRequired,
};

export default Message;
