import { connect } from 'react-redux';
import Navbar from './Navbar';
import { signIn, signOut } from '../../modules/auth/actions';


const mapStateToProps = ({ auth }) => ({
  isAuthorized: auth.isAuthorized,
});

export default connect(mapStateToProps, { signIn, signOut })(Navbar);
