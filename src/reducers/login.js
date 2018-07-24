import { userConstants } from '../actions/types';

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, ...user } : {};

export function login(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                loggingIn: false,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {
                loggedIn: false,
                loggingIn: false
            };
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}