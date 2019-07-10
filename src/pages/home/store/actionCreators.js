import { UPDATE_CURRENT_USER } from './actionTypes';

export const setCurrentUserAction = data => {
    return {
        type: UPDATE_CURRENT_USER,
        data
    }
}