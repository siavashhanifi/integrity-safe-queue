import { createReducer } from '@reduxjs/toolkit'


const initialState = { isSupervisor: false, id: 0};//


const userReducer = createReducer(initialState, {

    SET_USER: (state, action) => {
        state = action.payload.userDetails;
    },

});

export default userReducer;
