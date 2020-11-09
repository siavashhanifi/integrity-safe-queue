import  QueueManagement  from './index';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {queueState: state.rootReducer.queueSessionReducer.queue,
            supervisorPassword: state.rootReducer.queueSessionReducer.supervisorPassword,
            webSocket: state.rootReducer.webSocketsReducer 
        };//userState: state.terminalOutput.textHistory};
}

export default connect(mapStateToProps, null)(QueueManagement);