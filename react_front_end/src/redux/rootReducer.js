import { combineReducers } from "redux";
import userReducer from './userState/userReducer';
import queueSessionReducer from './queueSessionState/queueSessionReducer';
import webSocketReducer from './webSocketsState/webSocketsReducer';

export default combineReducers({ userReducer, queueSessionReducer, webSocketReducer });