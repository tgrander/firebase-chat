import { Button, Input, Modal } from 'antd';
import propTypes from 'prop-types';
import React from 'react';
import types from '../modules/auth/types'

import './Landing.css'


const mapAuthTypeToFunction = {
    [types.SIGN_UP]: () => {},
    [types.SIGN_IN]: () => {},
}

class Landing extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      email: '',
      password: '',
    };
  }

  renderModal = () => {

      this.setState({ showModal: !this.state.showModal })
  }

  handleOk = () => {
      const { email, password } = this.state

      this.props.signUp(email, password)

      this.setState({ email: '', password: '' })
  }

  onChangeEmail = e => {
      this.setState({ email: e.target.value })
  }

  onChangePassword = e => {
      this.setState({ password: e.target.value })
  }

  render() {
    const { props } = this;

    return (
      <div className="landing">
        <h2 className="landing-logo">Sign up to get started</h2>

        <div className="create-account">
            <Input placeholder="Email" onChange={this.onChangeEmail} />
            <Input placeholder="Password" onChange={this.onChangePassword} />
        </div>

        <Button {...{
            type: 'primary',
            onClick: this.handleOk
        }}>
            Sign up
        </Button>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: propTypes.bool.isRequired,
  signUp: propTypes.func.isRequired,
};

export default Landing;
