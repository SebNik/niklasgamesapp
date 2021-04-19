import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import preloadedState from "./initialState"
import loggerMiddleware from '../middleware/logger'
import rootReducer from './reducer'

// const middlewares = [loggerMiddleware, thunkMiddleware]
// const middlewareEnhancer = applyMiddleware(...middlewares)
//
// const composedEnhancers = composeWithDevTools(middlewareEnhancer)
//
// export default createStore(rootReducer, composedEnhancers)
//+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer)
export default store
