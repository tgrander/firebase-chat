import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

class TextInput extends React.Component {

  state = {
      value: ''
  }

  render() {

    const { props } = this

    return (

      <TextArea {...{
          autosize: true,
          placeholder: 'Start typing here...',
          value: this.state.value,
          onPressEnter: () => {

              props.sendMessage({
                  value: this.state.value,
                  color: this.props.color || '#1E9EE0',
                  userId: this.state.userId || ''
              })

              this.setState({ value: '' })
          },
          onChange: e => this.setState({ value: e.target.value }),
      }}
      />

    );
  }
}

export default TextInput;
