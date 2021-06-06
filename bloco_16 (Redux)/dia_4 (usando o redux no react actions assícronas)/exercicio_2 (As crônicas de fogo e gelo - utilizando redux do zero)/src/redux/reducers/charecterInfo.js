import { LOADING, SUCESS_GET_CHARECTER, FAIL_GET_CHARECTER } from '../actions';

const defaultStore = {
  loding: false,
  dataCharecter: null,
  errorMenssage: null,
}

function charecterInfo(store = defaultStore, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...store,
        loding: true,
      };
    case SUCESS_GET_CHARECTER:
      return {
        ...store,
        loding: false,
        dataCharecter: action.data,
        errorMenssage: null,
      };
    case FAIL_GET_CHARECTER:
      return {
        ...store,
        loding: false,
        errorMenssage: action.msgError,
        dataCharecter: null,
      };
    default:
      return store
  }
}

export default charecterInfo;