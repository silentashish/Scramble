import RootReducer from './reducers/RootReducer'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

let store = createStore(RootReducer, applyMiddleware(ReduxThunk));
export default store;