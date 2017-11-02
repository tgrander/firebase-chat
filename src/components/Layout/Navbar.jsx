import propTypes from 'prop-types';
import React from 'react';

import './Navbar.css';


function Navbar({ auth }) {
  return (
    <div className="navbar">
      {
            auth
                ? (
                  <a href="#">Logout</a>
                )
                : (
                  <div>
                    <a href="#">Signin</a>
                    <a href="#">Signup</a>
                  </div>
                )
        }
    </div>
  );
}

Navbar.propTypes = {
  auth: propTypes.bool.isRequired,
};

export default Navbar;
