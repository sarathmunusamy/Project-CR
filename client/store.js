
import { createStore } from 'redux';
import reducers from './reducers/index';
import Message from './data/Message';



const defaultState = { Message };
const store = createStore(reducers, defaultState);


export default store;