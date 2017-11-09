import { connect } from 'react-redux';
import { authorizeUser, signOut } from './modules/auth/actions';
import { fetchMessages, fetchMessagesSuccess } from './modules/messages/actions';
import App from './App';


const mapStateToProps = ({ auth }) => ({
  isAuthorized: auth.isAuthorized,
});

const actions = {
  authorizeUser,
  fetchMessages,
  fetchMessagesSuccess,
  signOut,
};

export default connect(mapStateToProps, actions)(App);
