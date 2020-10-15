import {combineReducers} from 'redux';
import ScramblerReducer from './ScramblerReducer'

 const RootReducer = combineReducers(
    {
        scrambler : ScramblerReducer,
    }
);
export default RootReducer;