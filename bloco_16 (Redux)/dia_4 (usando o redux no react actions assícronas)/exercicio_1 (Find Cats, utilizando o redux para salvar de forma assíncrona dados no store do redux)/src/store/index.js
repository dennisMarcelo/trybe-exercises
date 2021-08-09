// Importe o método applyMiddleware
import { createStore, compose, applyMiddleware } from 'redux';
// Importe o redux-thunk
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const extensionTools = window.devToolsExtension ? window.devToolsExtension() : f => f
// Aplique o middleware
const store = createStore(
  rootReducer, 
  compose(applyMiddleware(thunk), extensionTools)
);

export default store;

// consegui passar para a createStore o 'extenção do devTools' e o 'thunk' graças a esse post:
// https://medium.com/@e_himmelfarb/implement-redux-devtools-extension-with-thunk-and-other-async-middleware-20e97100b2b0