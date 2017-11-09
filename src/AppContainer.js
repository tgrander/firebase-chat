import { connect } from 'react-redux';
import { authorizeUser } from './modules/auth/actions';
import { fetchMessages, fetchMessagesSuccess } from './modules/messages/actions';
import App from './App';


const actions = {
  authorizeUser,
  fetchMessages,
  fetchMessagesSuccess,
};

export default connect(null, actions)(App);
