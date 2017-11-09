import { connect } from 'react-redux';
import { authorizeUser } from './modules/auth/actions';
import { fetchMessages } from './modules/messages/actions';
import App from './App';

export default connect(null, { authorizeUser, fetchMessages })(App);
