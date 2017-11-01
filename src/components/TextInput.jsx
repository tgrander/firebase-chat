import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

function TextInput() {
  return (

    <TextArea
      placeholder="Start typing here..."
      autosize
    />

  );
}

export default TextInput;
