import  JoinOrCreateSession from './index';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
            webSocket: state.rootReducer.webSocketReducer.webSocket, 
        };//userState: state.terminalOutput.textHistory};
}

const createWebSocketAction = (url) => {
  const webSocket = new WebSocket(url, "protocolOne");
  webSocket.onopen = function (event) {
    webSocket.send("Here's some text that the server is urgently awaiting!"); 
  };
    return{
        type: "SET_WEBSOCKET",
        payload: {
            webSocket: webSocket
        }
    }

}

const mapDispatchToProps = dispatch => {
    return {
      createWebSocket: (url) => {
        dispatch(createWebSocketAction(url));
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(JoinOrCreateSession);