import { connect } from 'react-redux';
import Messages from './Messages';


const mapStateToProps = ({ messages }) => ({
  messages,
});

export default connect(mapStateToProps)(Messages);
