import { userConstants } from '../constants/';

const cUser = JSON.parse(localStorage.getItem('user'));
const initialState = cUser ? { user: cUser } : {};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        user: action.user
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  };
}
