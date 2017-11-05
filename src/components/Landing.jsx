import { Modal, Input } from 'antd';
import propTypes from 'prop-types';
import React from 'react';


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

  render() {
    const { props } = this;

    return (
      <div>
        <div>Logo</div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: propTypes.bool.isRequired,
};

export default Landing;
