import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import thunk from 'redux-thunk'; //Async system pake thunk

export const store = createStore(reducer, applyMiddleware(thunk));