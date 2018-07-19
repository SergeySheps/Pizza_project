import { userConstants } from '../constants/userConstants'
import { userService } from '../services/userService'
import { alertActions } from './alertActions'

export const userActions = {
    register,
    login,
    logout,
    registerComplited

};

function login({email,password}) {
    return dispatch => {
        dispatch(request({email}));

        userService.login(email,password).then(
            (user) => {
                dispatch(success({email}));
                
            },
            (error) => {
                
                dispatch(failure({error}));
            }
        )

        function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
        function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
        function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }

    }
}
function logout() {
    userService.logout();
    return{
        type: userConstants.LOGOUT,
    }
}
function registerComplited(){
    return {
        type: userConstants.REGISTER_COMPLETED
    }
}
function register(user) {
    return dispatch => {

        dispatch(request(user));

        userService.register(user).then(
            (res) => {
                console.log("Wtfff",res );
                dispatch(alertActions.success('Registration successful'));
                dispatch(success(user));
            },
            (error) => {
                console.log("norm",error );
                dispatch(alertActions.error(error.toString()));
                dispatch(failure(error.toString()));
            }
        )

        function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
        function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
        function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }

    }
}