import { Button, Input, Modal } from 'antd';
import propTypes from 'prop-types';
import React from 'react';

import './Landing.css'


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

      // auth.signInWithEmailAndPassword(email, password)
      //     .then(() => this.renderModal())
      //     .catch(err => console.error(err))

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
        <div>Happy Chat :)</div>

        <div className="create-account">
            <Input placeholder="Email" onChange={this.onChangeEmail} />
            <Input placeholder="Password" onChange={this.onChangePassword} />
        </div>

        <Button type="primary">Sign up</Button>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: propTypes.bool.isRequired,
};

export default Landing;
