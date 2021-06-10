import {ADD_CLICK} from './action'

const inicialCounterState = {
  counter: 0,
}

function addReducer(state = inicialCounterState, action) {
  switch (action.type) {
    case ADD_CLICK:
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
}

export default addReducer;