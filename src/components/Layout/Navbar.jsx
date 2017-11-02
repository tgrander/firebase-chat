import propTypes from 'prop-types';
import React from 'react';
import { Modal, Input } from 'antd';

import './Navbar.css';


class Navbar extends React.Component {

    state = {
        showModal: false
    }

    renderModal = () => {
        this.setState({ showModal: !this.state.showModal })
    }

  render() {
    const { props } = this;

    return (
      <div className="navbar">
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
          onCancel={this.handleCancel}
        >
          <Input placeholder="Email" />
          <Input placeholder="Password" />
        </Modal>
      </div>
    );
  }
}

Navbar.propTypes = {
  auth: propTypes.bool.isRequired,
};

export default Navbar;
