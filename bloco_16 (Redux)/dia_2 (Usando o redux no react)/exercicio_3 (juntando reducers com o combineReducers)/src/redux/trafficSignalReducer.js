import { CHANGE_SIGNAL } from "./actionCreators";

const defaultState = {
  signalColor: 'red'
}

function trafficSignalReducer(state = defaultState, action) {
  switch (action.type) {
  case CHANGE_SIGNAL:
    return {
      ...state,
      signalColor: action.payload
    };
  default:
    return state;
  }
}

export default trafficSignalReducer;