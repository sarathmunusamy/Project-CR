import { connect } from 'react-redux';
import Main from './Main';
import * as actionCreator from '../actions/actionCreator';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {

    return {

        message: state.Message
    }

}


const mapDispatchToProps = (dispatch) => {

    return bindActionCreators(actionCreator, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;