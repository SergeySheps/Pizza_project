import { userConstants } from '../actions/types';

export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { 
        isRegistrationInProgress: true 
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        hasBeenRegistered: true
      };
    case userConstants.REGISTER_FAILURE:
      return {};
    case userConstants.REGISTER_COMPLETED:
      return {
        hasBeenRegistered: false
      }; 
    default:
      return state
  }
}