import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import {createStore, combineReducers} from 'redux';
import addReducer from '../src/redux/reducer'

const renderWithRedux = (
    component,
    { initialState, store = createStore(combineReducers({ addReducer }), initialState) } = {}
  ) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

export default renderWithRedux;
