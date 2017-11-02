import { connect } from 'react-redux';
import Messages from './Messages';


const mapStateToProps = state => ({
  messages: state.messages.messages,
});

export default connect(mapStateToProps)(Messages);
