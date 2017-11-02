import { connect } from 'react-redux';
import Navbar from './Navbar';


const mapStateToProps = state => ({
  auth: state.auth.isAuthorized,
});

export default connect(mapStateToProps)(Navbar);
