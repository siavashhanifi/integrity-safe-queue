import  App  from './App';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {userState: state.rootReducer.userReducer};//userState: state.terminalOutput.textHistory};
}

export default connect(mapStateToProps, null)(App);