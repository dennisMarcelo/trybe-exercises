import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const extensions = window.devToolsExtension ? window.devToolsExtension() : f => f;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), extensions)
);

export default store;
