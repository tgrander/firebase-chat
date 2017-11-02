import { connect } from 'react-redux';
import { sendMessage } from '../../modules/messages/actions';
import SentMessage from './SentMessage';


const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { sendMessage })(SentMessage);
