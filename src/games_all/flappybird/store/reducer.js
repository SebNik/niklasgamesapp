// this is the main reducer
// import initialState from './initialState'
import { combineReducers } from 'redux'
import reducer_bird from './reducer_bird'
import reducer_game from "./reducer_game";

const rootReducer = combineReducers({
    bird: reducer_bird,
    game: reducer_game,
})

export default rootReducer
