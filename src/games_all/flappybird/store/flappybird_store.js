import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import preloadedState from "./initialState"
import loggerMiddleware from '../middleware/logger'
import rootReducer from './reducer'

export default function configureStore() {
    const middlewares = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const composedEnhancers = composeWithDevTools(middlewareEnhancer)

    return createStore(rootReducer, preloadedState, composedEnhancers +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}
