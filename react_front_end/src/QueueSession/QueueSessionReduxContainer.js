import  QueueSession  from './index';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {queueState: state.rootReducer.queueSessionReducer.queue };//userState: state.terminalOutput.textHistory};
}

export default connect(mapStateToProps, null)(QueueSession);