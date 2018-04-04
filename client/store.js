
import { createStore } from 'redux';
import reducers from './reducers/index';
import Message from './data/Message';
import Items from './data/Item';


const defaultState = { Message , Items};
const store = createStore(reducers, defaultState);


export default store;