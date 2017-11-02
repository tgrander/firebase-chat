import React from 'react';
import propTypes from 'prop-types';

import './SentMessage.css';


function SentMessage({ value, backgroundColor }) {
  return (

    <div className="sent-message" style={{ backgroundColor: backgroundColor || '#1E9EE0' }}>
      {value}
    </div>
  );
}

SentMessage.propTypes = {
  backgroundColor: propTypes.string,
  value: propTypes.string.isRequired,
};

export default SentMessage;
