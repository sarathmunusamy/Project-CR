import { combineReducers } from 'redux';
import RemoveMessage from './Message';
import Message from './RemoveMessage';

const reducers = combineReducers({ RemoveMessage, Message });


export default reducers;