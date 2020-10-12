import { createReducer } from '@reduxjs/toolkit'


const initialState = {};


const webSocketsReducer = createReducer(initialState, {

    SET_WEBSOCKET: (state, action) => {
        state = action.payload.websocket;
    },

});

export default webSocketsReducer;
