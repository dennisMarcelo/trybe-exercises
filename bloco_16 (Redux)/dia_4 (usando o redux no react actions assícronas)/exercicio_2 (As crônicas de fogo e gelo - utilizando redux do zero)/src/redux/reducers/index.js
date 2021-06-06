import { combineReducers } from 'redux'
import charecterInfo from './charecterInfo'

const rootReducer = combineReducers({
  reducerCharacter: charecterInfo
})

export default rootReducer;