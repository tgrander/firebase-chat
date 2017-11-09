import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

class TextInput extends React.Component {

  state = {
      value: ''
  }

  onChange = e => this.setState({ value: e.target.value })

  onPressEnter = () => {

      this.props.sendMessage({
          value: this.state.value,
          color: this.props.color || '#1E9EE0',
          timeStamp: new Date,
          userId: this.props.userId || ''
      })

      this.setState({ value: '' })
  }

  render() {

    const { props, state } = this

    return (
        <div className="text-input">
            <TextArea {...{
                autosize: true,
                placeholder: 'Start typing here...',
                value: this.state.value,
                onChange: this.onChange,
                onPressEnter: this.onPressEnter,
            }}/>
        </div>
    );
  }
}

export default TextInput;
