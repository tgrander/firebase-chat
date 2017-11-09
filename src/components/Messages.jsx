import ReactDOM from 'react-dom';
import map from 'lodash/map';
import propTypes from 'prop-types';
import React from 'react';
import ReceivedMessage from './Messages/ReceivedMessage';
import SentMessage from './Messages/SentMessage';
import TextInput from './Messages/TextInputContainer';
import Landing from './LandingContainer';

import './Messages.css';


class Messages extends React.PureComponent {
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    node.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { props } = this;
    // if (!props.isAuthorized) {
    //   return <Landing />;
    // }
    return (
      <div className="messages-container">
        <div className="messages">
          { map(props.messages, message => (message.userId === props.userId
                      ? <SentMessage key={message.messageId} message={message} />
                      : <ReceivedMessage key={message.messageId} message={message} />)) }
          <div
            style={{ float: 'left', clear: 'both' }}
            ref={(el) => { this.messagesEnd = el; }}
          />
        </div>
        <TextInput />
      </div>
    );
  }
}

Messages.propTypes = {
  messages: propTypes.array.isRequired,
};

export default Messages;
