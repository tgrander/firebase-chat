import { connect } from 'react-redux';
import { sendMessage } from '../../modules/messages/actions';
import TextInput from './TextInput';


const mapStateToProps = state => ({
  userId: state.auth.userId,
});

export default connect(mapStateToProps, { sendMessage })(TextInput);
