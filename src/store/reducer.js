import { combineReducers } from 'redux';
import loginReducer from '../pages/home/store/reducer';

export default combineReducers({
    login: loginReducer
});