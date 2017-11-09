import { connect } from 'react-redux';
import Messages from './Messages';


const mapStateToProps = state => ({
  userId: state.auth.userId,
  messages: state.messages.messages,
});

export default connect(mapStateToProps)(Messages);
