import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

class TextInput extends React.Component {

  state = {
      value: ''
  }

  render() {

    const { props } = this

    console.log('TEXT INPUT PROPS: ', props);

    return (

      <TextArea {...{
          autosize: true,
          placeholder: 'Start typing here...',
          value: this.state.value,
          onPressEnter: () => {
              props.sendMessage(this.state.value)
              this.setState({ value: '' })
          },
          onChange: e => this.setState({ value: e.target.value }),
      }}
      />

    );
  }
}

export default TextInput;
