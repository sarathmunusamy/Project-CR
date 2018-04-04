import { combineReducers } from 'redux';
import Message from './Message';
import RemoveMessage from './RemoveMessage';
import Items from './Items';
import { reducer as form } from 'redux-form';

const reducers = combineReducers({ RemoveMessage, Message, Items, form });


export default reducers;