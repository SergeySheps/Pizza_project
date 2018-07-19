import { userConstants } from '../constants/userConstants';

export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {
        registered: true
      };
    case userConstants.REGISTER_FAILURE:
      return {};
    case userConstants.REGISTER_COMPLETED:
      return {
        registered: false
      }; 
    default:
      return state
  }
}