import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = (state) => {

    return {

        message: state.Message
    }

}

const App = connect(mapStateToProps, null)(Main);

export default App;