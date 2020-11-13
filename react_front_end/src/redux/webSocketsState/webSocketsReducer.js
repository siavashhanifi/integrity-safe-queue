import { createReducer } from '@reduxjs/toolkit'


const initialState = {webSocket: null};


const webSocketsReducer = createReducer(initialState, {

    SET_WEBSOCKET: (state, action) => {
        state.webSocket = action.payload.webSocket;
    },

});

export default webSocketsReducer;
