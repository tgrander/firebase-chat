import React from 'react'
import { Input } from 'antd';
const { TextArea } = Input;


export default class TextInput extends React.PureComponent {

    render() {

        return (
            <TextArea
                placeholder="Autosize height based on content lines"
                autosize
            />
        )
    }
}
