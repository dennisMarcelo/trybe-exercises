import { createStore, combineReducers, compose } from 'redux';
import carsReducer from './carsReducer';
import trafficSignalReducer from './trafficSignalReducer';

const extention  = window.devToolsExtension() || ((f) => f);

const rootReducer = combineReducers({
  carsReducer,
  trafficSignalReducer
})

const store = createStore(rootReducer,compose(extention));

export default store;
