import { connect } from 'react-redux';
import Messages from './Messages';


const mapStateToProps = ({ auth, messages }) => ({
  isAuthorized: auth.isAuthorized,
  userId: auth.userId,
  messages: messages.messages,
});

export default connect(mapStateToProps)(Messages);
