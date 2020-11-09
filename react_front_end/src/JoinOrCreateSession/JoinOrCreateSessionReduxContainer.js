import  JoinOrCreateSession from './index';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
            webSocket: state.rootReducer.webSocketsReducer 
        };//userState: state.terminalOutput.textHistory};
}

const setWebsocket = (webSocket) => {
    return{
        type: "SET_WEBSOCKET",
        payload: {
            webSocket: webSocket
        }
    }

}

const mapDispatchToProps = dispatch => {
    return {
      setWebsocket: (webSocket) => {
        dispatch(setWebsocket(webSocket));
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(JoinOrCreateSession);