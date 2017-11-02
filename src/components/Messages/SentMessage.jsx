import React from 'react';
import propTypes from 'prop-types';

import './SentMessage.css';


function SentMessage({ text, backgroundColor }) {
  return (

    <div className="sent-message" style={{ backgroundColor: backgroundColor || '#1E9EE0' }}>
      {text}
    </div>
  );
}

SentMessage.propTypes = {
  backgroundColor: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default SentMessage;
