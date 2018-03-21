import { combineReducers } from 'redux';
import Message from './Message';
import RemoveMessage from './RemoveMessage';

const reducers = combineReducers({ RemoveMessage, Message });


export default reducers;