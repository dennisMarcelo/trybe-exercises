import {MOVE_CAR} from './actionCreators';

const defaultState = ({
  cars: {
    yellow: false,
    red: false,
    blue: false,
  }
});


function carsReducer(state = defaultState, action) {
  switch(action.type) {
    case MOVE_CAR: 
      return {
        ...state,
        cars: {...state.cars, [action.car]: action.side}
      };
    default:
      return state;
  }
}

export default carsReducer;