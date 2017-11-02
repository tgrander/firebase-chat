import propTypes from 'prop-types';
import React from 'react';
import { Modal, Input } from 'antd';
import { auth } from '../../firebase'

import './Navbar.css';


class Navbar extends React.Component {

    state = {
        showModal: false,
        email: '',
        password: ''
    }

    componentDidMount = () => {

        auth.onAuthStateChanged(user => {
          if (user) {
            // User is signed in.

            console.log('USER: ', user);

            const { email, uid } = user

          } else {
            // User is signed out.

          }
      });
    }

    renderModal = () => {

        this.setState({ showModal: !this.state.showModal })
    }

    handleOk = () => {

        const { email, password } = this.state

        auth.signInWithEmailAndPassword(email, password)
            .then(() => this.renderModal())
            .catch(err => console.error(err))

        this.setState({ email: '', password: '' })
    }

  render() {
    const { props } = this;

    return (
      <div className="navbar">

         <div className="logo">Happy Chat :)</div>

        {
          props.auth
              ? (
                <a href="#">Logout</a>
              )
              : (
                <div className="nav-links">
                  <a href="#" onClick={this.renderModal}>Sign In</a>
                  <a href="#" onClick={this.renderModal}>Create Account</a>
                </div>
              )
        }

        <Modal
          title="Basic Modal"
          visible={this.state.showModal}
          onOk={this.handleOk}
          onCancel={this.renderModal}
        >
          <Input placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
          <Input placeholder="Password" onChange={e => this.setState({ password: e.target.value })} />
        </Modal>
      </div>
    );
  }
}

Navbar.propTypes = {
  auth: propTypes.bool.isRequired,
};

export default Navbar;