import { createReducer } from '@reduxjs/toolkit'


const initialState = {webSocket: null};


const webSocketsReducer = createReducer(initialState, {

    SET_WEBSOCKET: (state, action) => {
        const webSocket = action.payload.webSocket;
        webSocket.onopen = () => {
            console.log('WebSocket Client Connected');
          };
          webSocket.onmessage = (message) => {
            console.log(message);
          };
          webSocket.onerror = (message) => {
            console.log(message);
          };
        state.webSocket = webSocket;
    },

});

export default webSocketsReducer;
