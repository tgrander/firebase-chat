import { connect } from 'react-redux';
import { authorizeUser } from './modules/auth/actions';
import App from './App';

export default connect(null, { authorizeUser })(App);
