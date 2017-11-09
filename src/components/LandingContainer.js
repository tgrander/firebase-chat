import { connect } from 'react-redux';
import { signUp } from '../modules/auth/actions';
import Landing from './Landing';


const mapStateToProps = ({ auth }) => ({
  isAuthorized: auth.isAuthorized,
});

export default connect(mapStateToProps, { signUp })(Landing);
