import {applyMiddleware, createStore} from "redux"
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import loggerMiddleware from '../middleware/logger'
import rootReducer from './reducer'

const middlewares = [thunkMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares)

const composedEnhancers = composeWithDevTools(middlewareEnhancer)
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, composedEnhancers)
export default store

// const store = createStore(rootReducer)
// export default store
