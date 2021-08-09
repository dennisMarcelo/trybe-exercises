import {combineReducers, createStore, compose} from 'redux';
import addReducer from './reducer'

const windoDevTools  = window.devToolsExtension() || ((f) => f);
const rootReducer = combineReducers({addReducer})

const store = createStore(rootReducer, compose(windoDevTools));

export default store;