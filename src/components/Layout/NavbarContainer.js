import { connect } from 'react-redux';
import Navbar from './Navbar';
import { signin } from '../../modules/auth/actions';


const mapStateToProps = state => ({
  auth: state.auth.isAuthorized,
});

export default connect(mapStateToProps, { signIn })(Navbar);
