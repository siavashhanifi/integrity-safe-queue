import { createReducer } from '@reduxjs/toolkit'


const initialState = {
};

const queueSessionReducer = createReducer(initialState, {

    UPDATE_QUEUE: (state, action) => {
      state = action.payload.queueState;
    },

});

export default queueSessionReducer;
