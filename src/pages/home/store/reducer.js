import * as actionTypes from './actionTypes';
const defaultState = {
    currentUser: ''
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case actionTypes.UPDATE_CURRENT_USER:
            newState.currentUser = action.data;
            return newState
        default:
            return state;
    }
}