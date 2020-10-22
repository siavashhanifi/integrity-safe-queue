import { createReducer } from '@reduxjs/toolkit'
import { queueState } from '../../DUMMY_DATA/queue-state';


/*const initialState = { queue: {sessionId: null,
                                supervisors: null,
                                queuees: null,
                                notInQueue: null},
                       supervisorPassword: null
};*/

const initialState = { queue: queueState,         //dummy data
supervisorPassword: "XxaSdA"
};

const queueSessionReducer = createReducer(initialState, {

    UPDATE_QUEUE: (state, action) => {
      state = action.payload.queueState;
    },

});

export default queueSessionReducer;
