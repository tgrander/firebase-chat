import React from 'react';
import propTypes from 'prop-types';
import { Icon } from 'antd';

import './SentMessage.css';


const mapMessageStateToIcon = {
  sending: { icon: 'loading', color: '#108ee9' },
  success: { icon: 'check-circle-o', color: '#18A757' },
  failed: { icon: 'frown-o', color: '#f04134' },
};

function SentMessage({ message }) {
  return (

    <div className="message-container">
      <div className="sent-message" style={{ backgroundColor: message.color }}>
        <div className="message-value">{message.value}</div>
      </div>
      <Icon
        type={mapMessageStateToIcon[message.sendState].icon}
        style={{ color: mapMessageStateToIcon[message.sendState].color }}
      />
    </div>
  );
}

SentMessage.propTypes = {
  message: propTypes.object.isRequired,
};

export default SentMessage;
